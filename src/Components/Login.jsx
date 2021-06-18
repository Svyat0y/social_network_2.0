import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

// Login form component
const LoginForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit} className={style.login_form} action="">
			<h5>Login</h5>
			<span>
				<Field name={"email"} placeholder={"email"} component={"input"}/>
			</span>
			<span>
				<Field name={"password"} placeholder={"password"} component={"input"}/>
			</span>
			<label>
				<Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
				<span>Remember me</span>
			</label>
			<div>
				<button>Login</button>
				{/*<button>Registration</button>*/}
			</div>
		</form>
	)
}

// connect login form to redux form
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

//parent for login form component
const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<div className={style.login_wrapper}>
			<div className={style.login_box}>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	);
}

//connect login component to store
export default connect(null, null)(Login);