import React from "react";
import style from "./Profile.module.css";

//import icons from material ui
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import {VkIcon} from "../../../assets/images/svg";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";
import images from "../../../assets/images/images";

const Profile = (props) => {

	const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, contacts} = props.profile

	return (
		<div className={style.profile_wrapper}>

			<div className={style.profile_left_wrapper}>
				<div className={style.profile_img_wrapper}>
					<img src={photos.large || images.imgProfileNotFound} alt="profile_ava"/>
				</div>
				<div className={style.social_links_wrapper}>
					{contacts.facebook && <a title="Facebook" href={contacts.facebook} target="_blank">
						<FacebookIcon className={style.social_link_icon}/></a>}

					{contacts.github && <a title="GitHub" href={contacts.github} target="_blank">
						<GitHubIcon className={style.social_link_icon}/></a>}

					{contacts.instagram && <a title="Instagram" href={contacts.instagram} target="_blank">
						<InstagramIcon className={style.social_link_icon}/></a>}

					{contacts.vk && <a title="Vkontakte" href={contacts.vk} target="_blank">
						<VkIcon className={style.social_link_icon}/></a>}

					{contacts.youtube && <a title="Youtube" href={contacts.youtube} target="_blank">
						<YouTubeIcon className={style.social_link_icon}/></a>}

					{contacts.twitter && <a title="Twitter" href={contacts.twitter} target="_blank">
						<TwitterIcon className={style.social_link_icon}/></a>}

					{contacts.website && <a title="Website" href={contacts.website} target="_blank">
						<LinkIcon className={style.social_link_icon}/></a>}

					{contacts.mainLink && <a title="Main link" href={contacts.mainLink} target="_blank">
						<LinkIcon className={style.social_link_icon}/></a>}
				</div>
			</div>

			<div className={style.profile_info_wrapper}>
				<h1 className={style.profile_name}>{fullName}</h1>
				<div className={style.bio_wrapper}>

					<span className={style.info_box_title}>Looking for a job: <p
						className={style.info_box_desc}>{lookingForAJob && "Yes" || "No"}</p></span>

					<span className={style.info_box_title}>Job description: <p
						className={style.info_box_desc}>{lookingForAJobDescription}</p></span>

					<p className={style.info_box_title_about}>About Me:</p>

					<p className={style.info_box_desc}>{aboutMe}</p>

					{/*<button className={style.profile_sendMessage_btn}>Send message</button>*/}

				</div>
			</div>
		</div>
	)
}

export default Profile