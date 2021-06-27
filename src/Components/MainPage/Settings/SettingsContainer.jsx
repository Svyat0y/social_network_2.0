import React, {useEffect} from "react";
import {connect} from "react-redux";
import Settings from "./Settings";
import {refreshProfileInSettings, updateBioProfile} from "../../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";

const SettingsContainer = (props) => {

	const {profile, refreshProfileInSettings, updateBioProfile} = props

	useEffect(() => {
		if(!profile) refreshProfileInSettings()}, [profile])

	const saveSettingsForm = (formData) => {
		updateBioProfile(formData)
	}

	if(!profile) return <Preloader />

	return (
			<Settings saveSettingsForm={saveSettingsForm} profile={profile}/>
	);
}

const mapStateToProps = state => ({
	profile: state.profilePage.profile
})

export default connect(mapStateToProps, {refreshProfileInSettings, updateBioProfile})(SettingsContainer);