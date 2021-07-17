import { subscribeAPI, usersAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOGGLE_FOLLOW = "SET_TOGGLE_FOLLOW";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";


// initial state for side-bar avatars (static)
const initialState = {
	users: [],
	pageSize: 75,
	currentPage: 1,
	totalCount: 0,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return { ...state, users: action.payload }

		case SET_TOTAL_COUNT:
			return { ...state, totalCount: action.payload }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload }

		case SET_IS_FETCHING:
			return { ...state, isFetching: action.payload }

		case SET_FOLLOWING_IN_PROGRESS:
			return {
				...state, followingInProgress: action.payload.isFollowing
					? [ ...state.followingInProgress, action.payload.userId ]
					: state.followingInProgress.filter(id => id !== action.payload.userId)
			}

		case SET_TOGGLE_FOLLOW:
			return {
				...state, users: state.users.map(u => {
					if (action.payload === u.id && !u.followed) {
						return { ...u, followed: true }
					} else if (action.payload === u.id && u.followed) {
						return { ...u, followed: false }
					}
					return u
				})
			}

		default:
			return state
	}
}

//action creators
const setUsers = (users) => ({ type: SET_USERS_DATA, payload: users })
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, payload: totalCount })
const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
const setToggleFollow = (userId) => ({ type: SET_TOGGLE_FOLLOW, payload: userId })
const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching })
const setFollowingInProgress = (isFollowing, userId) => ({ type: SET_FOLLOWING_IN_PROGRESS, payload: { isFollowing, userId } })


//thunk creators

// receive users list
export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(setCurrentPage(page))
	dispatch(setIsFetching(true))

	const data = await usersAPI.getUsers(page, pageSize)

	dispatch(setIsFetching(false))
	dispatch(setTotalCount(data.totalCount))
	dispatch(setUsers(data.items))
}

// subscribe unsubscribe unfollow flow
export const subscribeUnsubscribeFlow = async (dispatch, userId, apiMethod) => {
	dispatch(setFollowingInProgress(true, userId))
	const data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(setToggleFollow((userId)))
		dispatch(setFollowingInProgress(false, userId))
	}
}

// subscribe
export const followAccept = (userId) => async (dispatch) => {
	await subscribeUnsubscribeFlow(dispatch, userId, subscribeAPI.follow.bind(subscribeAPI))


}

// unsubscribe
export const unfollowAccept = (userId) => async (dispatch) => {
	await subscribeUnsubscribeFlow(dispatch, userId, subscribeAPI.unfollow.bind(subscribeAPI))
}

export default usersReducer;