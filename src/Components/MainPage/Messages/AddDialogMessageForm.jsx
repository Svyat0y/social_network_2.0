import React from "react";
import style from "./Messages.module.css";
import {Field, reduxForm} from "redux-form";

const AddDialogMessageForm = (props) => {

	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit} className={style.dialog_message_form}>
			<Field name={"newDialogMessage"} component={"textarea"}/>
			<button>Send message</button>
		</form>
	)
}

const AddDialogMessageFormRedux = reduxForm({form: "addDialogMessageForm"})(AddDialogMessageForm);

export default AddDialogMessageFormRedux;