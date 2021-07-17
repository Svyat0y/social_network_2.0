import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

const initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true }

		default:
			return state
	}
}

//action creators
export const initializeSuccess = () => ({ type: INITIALIZED_SUCCESS })


//thunk creators

//initialization application
export const startInitialize = () => (dispatch) => {
	const promiseMe = dispatch(getAuthUserData())
	Promise.all([ promiseMe ]).then(() => {
		dispatch(initializeSuccess())
	})
}

export default appReducer;