import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import sideBarReducer from "./side-bar-reducer";


const reducers = combineReducers({
	sideBar: sideBarReducer,
	form: formReducer
})

const store = createStore(reducers)

window.store = store

export default store