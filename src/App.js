import React, {useEffect} from "react";
import './App.css';
import Login from "./Components/Login";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Aside from "./Components/Aside/Aside";
import MainPage from "./Components/MainPage/MainPage";
import {connect} from "react-redux";
import {startInitialize} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";

const App = ({initialized, startInitialize, isAuth}) => {

	useEffect(() => {
		startInitialize()
	}, [])

	if (!initialized) return <Preloader/>

	if (!isAuth) return <Login/>

	return (
		<div className="App">
			<HeaderContainer/>
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

export default connect(mapStateToProps, {startInitialize})(App);
