import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const SET_CAPTCHA = "SET_CAPTCHA"
const SET_OWNER = "SET_OWNER"

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isOwner: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {...state, ...action.payload}

		case SET_CAPTCHA:
			return {...state, captchaUrl: action.payload}

		case SET_OWNER:
			return {...state, isOwner: action.payload}

		default:
			return state
	}
}

//action creators
export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA, payload: captchaUrl})
export const setOwner = (owner) => ({type: SET_OWNER, payload: owner})


// thunk creators

// receive authorized user data
export const getAuthUserData = () => async (dispatch) => {
	let data = await authAPI.me()
	if (data.resultCode === 0) {
		let {id, email, login} = data.data
		dispatch(setUserData(id, email, login, true))
		dispatch(setOwner(true))
	}
}

// login
export const loginAction = (email, password, rememberMe, captcha) => async (dispatch) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
	}
}

// logout
export const logout = () => async (dispatch) => {
	const data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
		dispatch(setCaptchaUrl(null))
		dispatch(setOwner(false))
	}
}

// receive captcha
export const getCaptchaUrl = () => async (dispatch) => {
	debugger
	const data = await securityAPI.getCaptcha()
	dispatch(setCaptchaUrl(data.url))
}


export default authReducer;