import React from "react";
import style from "./Profile.module.css"
import {connect} from "react-redux";

import {VkIcon} from "../../../assets/images/svg";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import {getUserProfile} from "../../../Redux/profile-reducer";


const Profile = (props) => {

	const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, contacts} = props.profile

	return (
		<div className={style.profile_wrapper}>
			<div className={style.profile_img_wrapper}>
				<img src={photos.large} alt="profile_ava"/>
			</div>
			<div className={style.profile_info_wrapper}>
				<h1 className={style.profile_name}>{fullName}</h1>
				<div className={style.bio_wrapper}>
					<span className={style.info_box_title}>Looking for a job: <span className={style.info_box_desc}>{lookingForAJob ? "Yes": "No"}</span></span>

					<span className={style.info_box_title}>Job description: <span className={style.info_box_desc}>{lookingForAJobDescription}</span></span>

					<span className={style.info_box_title}>About Me: <span className={style.info_box_desc}>{aboutMe}</span></span>
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
		</div>
	)
}


const ProfilePosts = () => {
	return (
		<div>
			posts
		</div>
	)
}


class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getUserProfile("16553")
	}


	render() {

		if(!this.props.profile) {
			return (
				<div>loooooooooooooooooading</div>
			)
		}

		return (
			<div className={style.profileContainer_wrapper}>
				<Profile profile={this.props.profile}/>
				<ProfilePosts/>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);