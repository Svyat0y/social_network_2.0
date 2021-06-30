export const getProfile = (state) => {
	return state.profilePage.profile
}

export const getPostData = (state) => {
	return state.profilePage.postData
}

export const getStatus = (state) => {
	return state.profilePage.status
}

export const getAuthorizedId = (state) => {
	return state.auth.id
}

export const getUpdatingBioSuccess = (state) => {
	return state.profilePage.updatingBioSuccess
}