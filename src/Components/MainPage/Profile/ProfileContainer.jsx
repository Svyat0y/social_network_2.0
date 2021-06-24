import React, {useEffect} from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom"
import {getUserProfile} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";

const ProfileContainer = (props) => {

	const refreshProfile = () => {
		let userId = props.match.params.userId
		if (!userId) userId = "16553"
		props.getUserProfile(userId)
	}

	useEffect(() => {
		refreshProfile()
	}, [props.match.params.userId])

	if (!props.profile) return <div>loooooooooooooooooading</div>

	return (
		<div className={style.profileContainer_wrapper}>
			<Profile profile={props.profile}/>
			<ProfilePosts/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default compose(
	connect(mapStateToProps, {getUserProfile}),
	withRouter
)(ProfileContainer)