import React, {useEffect} from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom"
import {addPostMessage, getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profile-reducer";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";
import Preloader from "../../Common/Preloader/Preloader";
import {getAuthorizedId, getPostData, getProfile, getStatus} from "../../../Redux/selectors/profile-selectors";
import {closeMenu} from "../../../Redux/side-bar-reducer";

const ProfileContainer = (props) => {

	const {profile, postData, addPostMessage, status, getUserProfile, getUserStatus, authorizedUserid, updateUserStatus, closeMenu} = props

	useEffect(() => {refreshProfile()}, [props.match.params.userId])

	// close the menu after rendering the selected component, and scroll up
	useEffect(() => {
		closeMenu()
		window.scrollTo(0, 0)
	},[])

	const refreshProfile = () => {
		let userId = props.match.params.userId
		if (!userId) userId = authorizedUserid
		getUserProfile(userId)
		getUserStatus(userId)
	}

	if (!profile) return <Preloader />

	return (
		<div className={style.profileContainer_wrapper}>
			<Profile profile={profile} status={status} updateUserStatus={updateUserStatus}/>
			<ProfilePosts postData={postData} addPostMessage={addPostMessage}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	profile: getProfile(state),
	postData: getPostData(state),
	status: getStatus(state),
	authorizedUserid: getAuthorizedId(state)
})

export default compose(
	connect(mapStateToProps, {getUserProfile, addPostMessage, getUserStatus, updateUserStatus, closeMenu}),
	withRouter
)(ProfileContainer);