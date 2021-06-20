import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA: {
			return {
				...state, ...action.payload
			}
		}

		default:
			return state
	}
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

// get request authorized user data
export const getAuthUserData = () => async (dispatch) => {
	let data = await authAPI.me()
	if (data.resultCode === 0) {
		let {id, email, login} = data.data
		dispatch(setUserData(id, email, login, true))
	}
}

export default authReducer;