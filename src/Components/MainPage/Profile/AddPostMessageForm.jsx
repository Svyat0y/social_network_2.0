import React from "react";
import style from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";

const AddPostMessageForm = (props) => {

	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit} className={style.postMessage_form}>
			<Field component="textarea" name="newPostMessage" placeholder="write a message"/>
			<button>Add post</button>
		</form>
	);
}

const AddPostMessageReduxForm = reduxForm({form: "postMessageForm"})(AddPostMessageForm)

export default AddPostMessageReduxForm;