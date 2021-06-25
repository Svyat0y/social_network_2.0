import style from "./Messages.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const AddDialogMessageForm = (props) => {

	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit} className={style.dialog_message_form}>
			<Field name={'newDialogMessage'} component={'textarea'}/>
			<button>Send message</button>
		</form>
	)
}

const AddDialogMessageFormRedux = reduxForm({form: 'addDialogMessageForm'})(AddDialogMessageForm)

export default AddDialogMessageFormRedux