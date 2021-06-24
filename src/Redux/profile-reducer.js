import {profileAPI} from "../api/api";

const SET_PROFILE = "SET_PROFILE"
const SET_POST = "SET_POST"

const initialState = {
	profile: null,
	postData: [
		{
			id: 0,
			name: 'Dasha',
			message: 'hi, how are u?',
			likesCount: '1536',
			img: 'https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg'
		},
		{
			id: 1,
			name: 'Panda',
			message: 'hi, are u there??',
			likesCount: '35',
			img: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg'
		},
		{
			id: 2,
			name: 'Vlad',
			message: 'hi',
			likesCount: '150',
			img: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg'
		}
	]
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_PROFILE:
			return {...state, profile: action.payload}

		case SET_POST:
			if (action.payload && action.payload.replace(/\s/g, "")) {
				return {
					...state, postData: [...state.postData, {
						id: 3,
						name: 'Dasha',
						message: action.payload,
						likesCount: 0,
						img: 'https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg'
					}]
				}
			}
			return state

		default:
			return state
	}
}

export const setUserProfile = (profile) => ({type: SET_PROFILE, payload: profile})
export const setPostMessage = (message) => ({type: SET_POST, payload: message})


export const addPostMessage = (message) => (dispatch) => {

	dispatch(setPostMessage(message))
}

export const getUserProfile = (userId) => async (dispatch) => {

	const data = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(data.data))
}


export default profileReducer;