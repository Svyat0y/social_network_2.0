import React from "react";
import style from "./Profile.module.css";
import images from "../../../assets/images/images";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import SocialLinks from "./SocialLinks";

const Profile = (props) => {

	const {status, updateUserStatus} = props
	const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, contacts} = props.profile

	return (
		<div className={style.profile_wrapper}>

			<div className={style.profile_left_wrapper}>
				<div className={style.profile_img_wrapper}>
					<img src={photos.large || images.imgProfileNotFound} alt="profile_ava"/>
				</div>
				<SocialLinks contacts={contacts} />
			</div>

			<div className={style.profile_info_wrapper}>
				<h1 className={style.profile_name}>{fullName}</h1>
				<ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
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
	);
}

export default Profile;