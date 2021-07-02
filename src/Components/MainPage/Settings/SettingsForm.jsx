import {Element} from "../../Common/FormControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators";
import style from "./Settings.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const Input = Element("input")
const Textarea = Element("textarea")
const maxLength300 = maxLengthCreator(300)

const SettingsForm = (props) => {

	const {handleSubmit, profile, updatingBioSuccess} = props

	return (
		<form onSubmit={handleSubmit} className={style.settings_form}>

			<div className={style.settings_box_wrapper}>
				<span>Full Name:</span>
				<div className={style.input_info_wr}>
					<Field name="fullName" component={Input} placeholder="Full name"/>
				</div>
			</div>

			<div className={style.settings_box_wrapper}>
				<span>Looking For A Job:</span>
				<div className={style.input_info_wr}>
					<Field name="lookingForAJob" component={Input} type="checkbox"/>
				</div>
			</div>

			<div className={style.settings_box_wrapper}>
				<span>Job Description:</span>
				<div className={style.input_info_wr}>
					<Field name="lookingForAJobDescription" component={Textarea} validate={[maxLength300]} placeholder="Your skills"/>
				</div>
			</div>

			<div className={style.settings_box_wrapper}>
				<span>About Me:</span>
				<div className={style.input_info_wr}>
					<Field name="aboutMe" component={Textarea} validate={[maxLength300]} placeholder="About me"/>
				</div>
			</div>

			<h5 className={style.contacts_header}>Contacts</h5>

			{Object.keys(profile.contacts).map(key => {
				return <div key={key} className={style.settings_box_wrapper}>
					<span>{key}:</span>
					<div className={style.input_info_wr}>
						<Field name={"contacts." + key} component={Input}/>
					</div>
				</div>
			})}
			<button>Save changes</button>
			<span className={style.updating_success}>{updatingBioSuccess}</span>
		</form>
	);
}

const SettingsFormRedux = reduxForm({form: "settingsForm", enableReinitialize: true})(SettingsForm)

export default SettingsFormRedux;