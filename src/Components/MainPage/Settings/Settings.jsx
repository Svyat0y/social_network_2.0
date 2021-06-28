import React from "react";
import style from "./Settings.module.css";
import SettingsFormRedux from "./SettingsForm";

const Settings = (props) => {

	const {profile, saveSettingsForm} = props

	return (
		<div className={style.settings_wrapper}>
			<div className={style.upload_Photo_wrapper}>
				<span>Upload your photo:</span>
				<input type="file"/>
			</div>
			<SettingsFormRedux onSubmit={saveSettingsForm} initialValues={profile} profile={profile}/>
		</div>
	);
}

export default Settings;