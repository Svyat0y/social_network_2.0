import {Element} from "./Common/FormControls/FormControls";
import style from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "../utils/validators";
import React from "react";

const Input = Element("input")

const LoginForm = ({handleSubmit, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit} className={style.login_form} action="">
			<h5>Login</h5>
			<span>
				<Field name="email" placeholder="email" component={Input} validate={[required]}/>
			</span>
			<span>
				<Field name="password" type="password" placeholder="password" component={Input} validate={[required]}/>
			</span>
			<label>
				<Field name="rememberMe" component={Input} type="checkbox"/>
				<span>Remember me</span>
			</label>
			{captchaUrl && <span className={style.login_captcha}>
				<Field name="captcha" placeholder="captcha" component={Input}/>
				<img src={captchaUrl} alt="captcha"/>
			</span>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export default LoginReduxForm;