import React from "react";
import style from "./Profile.module.css";
import { Field, reduxForm } from "redux-form";
import { Element } from "../../Common/FormControls/FormControls";
import { maxLengthCreator } from "../../../utils/validators";

const Textarea = Element("textarea")
const maxLength300 = maxLengthCreator(300)

const AddPostMessageForm = (props) => {

	const { handleSubmit } = props

	return (
		<form onSubmit={ handleSubmit } className={ style.postMessage_form }>
			<Field component={ Textarea } name="newPostMessage" placeholder="write a message" validate={ [ maxLength300 ] }/>
			<button>Add post</button>
		</form>
	);
}

const AddPostMessageReduxForm = reduxForm({ form: "postMessageForm" })(AddPostMessageForm)

export default AddPostMessageReduxForm;