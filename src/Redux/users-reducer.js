import {followedAPI, usersAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


// initial state for side-bar avatars (static)
const initialState = {
	users: [],
	pageSize: 75,
	currentPage: 1,
	totalCount: 0
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return {...state, users: action.payload}

		case SET_TOTAL_COUNT:
			return {...state, totalCount: action.payload}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.payload}

		default:
			return state
	}
}

//action creators
const setUsers = (users) => ({type: SET_USERS_DATA, payload: users})
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})


//thunk creators
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setCurrentPage(currentPage))

	const data = await usersAPI.getUsers(currentPage, pageSize)

	dispatch(setTotalCount(data.totalCount))
	dispatch(setUsers(data.items))
}

// export const followAccept = (userId) => async (dispatch) => {
//
// 	const data = await followedAPI.follow(userId)
//
// }

export default usersReducer;