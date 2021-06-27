import React, {useEffect} from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom"
import {addPostMessage, getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";

const ProfileContainer = (props) => {

	const {profile, postData, addPostMessage, status, getUserProfile, getUserStatus, authorizedUserid, updateUserStatus} = props

	useEffect(() => {refreshProfile()}, [props.match.params.userId])

	const refreshProfile = () => {
		let userId = props.match.params.userId
		if (!userId) userId = authorizedUserid
		getUserProfile(userId)
		getUserStatus(userId)
	}

	if (!profile) return <div>loooooooooooooooooading</div>

	return (
		<div className={style.profileContainer_wrapper}>
			<Profile profile={profile} status={status} updateUserStatus={updateUserStatus}/>
			<ProfilePosts postData={postData} addPostMessage={addPostMessage}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	postData: state.profilePage.postData,
	status: state.profilePage.status,
	authorizedUserid: state.auth.id
})

export default compose(
	connect(mapStateToProps, {getUserProfile, addPostMessage, getUserStatus, updateUserStatus}),
	withRouter
)(ProfileContainer)