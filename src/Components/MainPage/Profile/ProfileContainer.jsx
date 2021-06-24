import React, {useEffect} from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom"
import {addPostMessage, getUserProfile} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";

const ProfileContainer = (props) => {

	const {profile, postData, addPostMessage} = props

	const refreshProfile = () => {
		let userId = props.match.params.userId
		if (!userId) userId = "16553"
		props.getUserProfile(userId)
	}

	useEffect(() => {
		refreshProfile()
	}, [props.match.params.userId])

	if (!profile) return <div>loooooooooooooooooading</div>

	return (
		<div className={style.profileContainer_wrapper}>
			<Profile profile={profile}/>
			<ProfilePosts postData={postData} addPostMessage={addPostMessage}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	postData: state.profilePage.postData
})

export default compose(
	connect(mapStateToProps, {getUserProfile, addPostMessage}),
	withRouter
)(ProfileContainer)