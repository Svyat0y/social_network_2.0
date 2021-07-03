import React, {useEffect} from 'react';
import style from './Login.module.css'
import {connect} from "react-redux";
import {loginAction} from "../Redux/auth-reducer";
import LoginReduxForm from "./LoginForm";
import {startInitialize} from "../Redux/app-reducer";
import {getCaptchaUrl, getIsAuth, getIsOwner} from "../Redux/selectors/auth-selectors";
import {Redirect} from "react-router-dom";

const Login = (props) => {

	const {loginAction, captchaUrl, isOwner} = props

	const onSubmit = (values) => {
		loginAction(values.email, values.password, values.rememberMe, values.captcha)
	}

	if(isOwner) return <Redirect to={"/"}/>

	return (
		<div className={style.login_wrapper}>
			<div className={style.login_box}>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	captchaUrl: getCaptchaUrl(state),
	isOwner: getIsOwner(state)
})

export default connect(mapStateToProps, {loginAction, startInitialize})(Login);