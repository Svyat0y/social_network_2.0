import {followedAPI, subscribeAPI, usersAPI} from "../api/api";

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
			return {...state, users: action.payload}

		case SET_TOTAL_COUNT:
			return {...state, totalCount: action.payload}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.payload}

		case SET_IS_FETCHING:
			return {...state, isFetching: action.payload}

		case SET_FOLLOWING_IN_PROGRESS:
			return {
				...state, followingInProgress: action.payload.isFollowing
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter(id => id !== action.payload.userId)
			}

		case SET_TOGGLE_FOLLOW:
			return {...state, users: state.users.map(u => {
					if(action.payload === u.id && !u.followed) {
						return{...u, followed: true}
					} else if (action.payload === u.id && u.followed) {
						return {...u, followed: false}
					}
					return u
				})}

		default:
			return state
	}
}

//action creators
const setUsers = (users) => ({type: SET_USERS_DATA, payload: users})
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
const setToggleFollow = (userId) => ({type: SET_TOGGLE_FOLLOW, payload: userId})
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching})
const setFollowingInProgress = (isFollowing, userId) => ({type: SET_FOLLOWING_IN_PROGRESS, payload: {isFollowing, userId}})


//thunk creators
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setCurrentPage(currentPage))
	dispatch(setIsFetching(true))

	const data = await usersAPI.getUsers(currentPage, pageSize)

	dispatch(setIsFetching(false))
	dispatch(setTotalCount(data.totalCount))
	dispatch(setUsers(data.items))
}

export const followAccept = (userId) => async (dispatch) => {

	dispatch(setFollowingInProgress(true, userId))

	const data = await subscribeAPI.follow(userId)

	if (data.resultCode === 0) {
		dispatch(setToggleFollow((userId)))
		dispatch(setFollowingInProgress(false, userId))
	}
}

export const unfollowAccept = (userId) => async (dispatch) => {

	dispatch(setFollowingInProgress(true, userId))

	const data = await subscribeAPI.unfollow(userId)
	if (data.resultCode === 0) {
		dispatch(setToggleFollow((userId)))
		dispatch(setFollowingInProgress(false, userId))
	}
}

export default usersReducer;