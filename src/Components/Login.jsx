import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit} className={style.login_form} action="">
			<h5>Login</h5>
			<span>
				<Field name={'email'} placeholder={'email'} component={'input'}/>
			</span>
			<span>
				<Field name={'password'} type={'password'} placeholder={'password'} component={'input'}/>
			</span>
			<label>
				<Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
				<span>Remember me</span>
			</label>
			{captchaUrl && <span className={style.login_captcha}>
				<Field name={'captcha'} placeholder={'captcha'} component={'input'}/>
				<img src={captchaUrl} alt="captcha"/>
			</span>}
			<div>
				<button>Login</button>
				{/*<button>Registration</button>*/}
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {

	const {isAuth, login, captchaUrl} = props

	const onSubmit = (values) => login(values.email, values.password, values.rememberMe, values.captcha)

	if(isAuth) return <Redirect to='/profile'/>

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