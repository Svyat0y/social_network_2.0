import React from "react";
import style from "./Settings.module.css";
import SettingsFormRedux from "./SettingsForm";

const Settings = (props) => {

	const { profile, saveSettingsForm, updatingBioSuccess, uploadPhoto } = props

	return (
		<div className={ style.settings_wrapper }>
			<div className={ style.upload_Photo_wrapper }>
				<span>Upload your photo:</span>
				<input onChange={ uploadPhoto } type="file"/>
			</div>
			<SettingsFormRedux onSubmit={ saveSettingsForm } initialValues={ profile } profile={ profile }
							   updatingBioSuccess={ updatingBioSuccess }/>
		</div>
	);
}

export default Settings;