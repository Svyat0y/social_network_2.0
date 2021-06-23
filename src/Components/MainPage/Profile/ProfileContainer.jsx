import React from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";

import {VkIcon} from "../../../assets/images/svg";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';


const Profile = (props) => {

	return (
		<div className={style.profile_wrapper}>
			<div className={style.profile_img_wrapper}>
				<img src="https://bipbap.ru/wp-content/uploads/2017/06/5848acee5ee66.jpg" alt="profile_ava"/>
			</div>
			<div className={style.profile_info_wrapper}>
				<h1 className={style.profile_name}>Profile name</h1>
				<div className={style.bio_wrapper}>
					<span className={style.info_box_tittle}>Looking for a job: <span className={style.info_box_desc}>Yes NO</span></span>

					<span className={style.info_box_tittle}>Job description: <span className={style.info_box_desc}>description</span></span>

					<span className={style.info_box_tittle}>About Me: <span className={style.info_box_desc}>about me</span></span>
				</div>
				<div className={style.social_links_wrapper}>
					<a href="#"><GitHubIcon className={style.social_link_icon}/></a>
					<a href="#"><FacebookIcon className={style.social_link_icon}/></a>
					<a href="#"><InstagramIcon className={style.social_link_icon}/></a>
					<a href="#"><VkIcon className={style.social_link_icon}/></a>
					<a href="#"><YouTubeIcon className={style.social_link_icon}/></a>
					<a href="#"><TwitterIcon className={style.social_link_icon}/></a>
				</div>
			</div>
		</div>
	)
}


const ProfilePosts = (props) => {
	return (
		<div>
			posts
		</div>
	)
}


const ProfileContainer = () => {
	return (
		<div className={style.profileContainer_wrapper}>
			<Profile/>
			<ProfilePosts/>
		</div>
	);
}

export default connect(null, null)(ProfileContainer);