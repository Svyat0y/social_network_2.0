import React from 'react';
import style from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";

const Login = (props) => {

	const {isAuth, login, captchaUrl} = props

	const onSubmit = (values) => login(values.email, values.password, values.rememberMe, values.captcha)

	if(isAuth) return <Redirect to="/profile"/>

	return (
		<div className={style.login_wrapper}>
			<div className={style.login_box}>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);