import React from "react";
import style from "./Messages.module.css";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../Common/FormControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators";

const Textarea = Element("textarea")
const maxLength300 = maxLengthCreator(300)

const AddDialogMessageForm = (props) => {

	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit} className={style.dialog_message_form}>
			<Field name={"newDialogMessage"} component={Textarea} validate={[maxLength300]}/>
			<button>Send message</button>
		</form>
	)
}

const AddDialogMessageFormRedux = reduxForm({form: "addDialogMessageForm"})(AddDialogMessageForm);

export default AddDialogMessageFormRedux;