import {profileAPI} from "../api/api";

const SET_PROFILE = "SET_PROFILE"

const initialState = {
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_PROFILE:
			return {...state, profile: action.payload}

		default:
			return state
	}
}

export const setUserProfile = (profile) => ({type: SET_PROFILE, payload: profile})

export const getUserProfile = (userId) => async (dispatch) => {

	const data = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(data.data))
}



export default profileReducer;