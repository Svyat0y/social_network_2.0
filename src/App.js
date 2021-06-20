import React, {useEffect} from "react";
import './App.css';
import Login from "./Components/Login";
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import MainPage from "./Components/MainPage/MainPage";
import {connect} from "react-redux";
import {startInitialize} from "./Redux/app-reducer";

const App = ({initialized, startInitialize, isAuth}) => {

	useEffect(() => {
		startInitialize()
	}, [initialized])

	if (!initialized) {
		return (
			<div>
				loading
			</div>
		)
	}

	if (!isAuth) {
		return (
			<Login/>
		)
	}
	return (
		<div className="App">
			<Header/>
			<main className="main_wrapper">
				<Aside/>
				<MainPage/>
			</main>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth
})

//connected App to store
export default connect(mapStateToProps, {startInitialize})(App);
