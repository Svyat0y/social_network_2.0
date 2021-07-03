export const getIsAuth = (state) => {
	return state.auth.isAuth
}

export const getCaptchaUrl = (state) => {
	return state.auth.captchaUrl
}

export const getIsOwner = (state) => {
	return state.auth.isOwner
}