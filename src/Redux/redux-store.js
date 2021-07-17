import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import sideBarReducer from "./side-bar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
	sideBar: sideBarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	form: formReducer
})

// this is for the redux tool in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store;

export default store;