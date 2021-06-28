import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {refreshProfileInSettings, savePhoto, updateBioProfile, updateWasSuccessfully} from "../../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";

const SettingsContainer = (props) => {

	const {profile, refreshProfileInSettings, updateBioProfile, updatingBioSuccess, updateWasSuccessfully, savePhoto} = props

	const uploadPhoto = (e) => {
		if (e.target.files) savePhoto(e.target.files[0])
	}

	useEffect(() => {
		if (!profile) {
			refreshProfileInSettings()
		}
	}, [profile])

	useEffect(() => {
		return () => {
			setTimeout(() => {
				updateWasSuccessfully("")
			}, 4000)
		}
	}, [updatingBioSuccess])

	const saveSettingsForm = (formData) => {
		updateBioProfile(formData)
	}

	if (!profile) return <Preloader/>

	return (
		<Settings saveSettingsForm={saveSettingsForm} profile={profile} updatingBioSuccess={updatingBioSuccess} uploadPhoto={uploadPhoto}/>
	);
}

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	updatingBioSuccess: state.profilePage.updatingBioSuccess
})

export default connect(mapStateToProps, {refreshProfileInSettings, updateBioProfile, updateWasSuccessfully, savePhoto})(SettingsContainer);