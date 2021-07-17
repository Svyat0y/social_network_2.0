import React from "react";
import style from "./Profile.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { VkIcon } from "../../../assets/images/svg";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";

const SocialLinks = (props) => {

	const { contacts } = props

	return (
		<div className={ style.social_links_wrapper }>
			{ contacts.facebook && <a title="Facebook" href={ contacts.facebook } target="_blank">
				<FacebookIcon className={ style.social_link_icon }/></a> }

			{ contacts.github && <a title="GitHub" href={ contacts.github } target="_blank">
				<GitHubIcon className={ style.social_link_icon }/></a> }

			{ contacts.instagram && <a title="Instagram" href={ contacts.instagram } target="_blank">
				<InstagramIcon className={ style.social_link_icon }/></a> }

			{ contacts.vk && <a title="Vkontakte" href={ contacts.vk } target="_blank">
				<VkIcon className={ style.social_link_icon }/></a> }

			{ contacts.youtube && <a title="Youtube" href={ contacts.youtube } target="_blank">
				<YouTubeIcon className={ style.social_link_icon }/></a> }

			{ contacts.twitter && <a title="Twitter" href={ contacts.twitter } target="_blank">
				<TwitterIcon className={ style.social_link_icon }/></a> }

			{ contacts.website && <a title="Website" href={ contacts.website } target="_blank">
				<LinkIcon className={ style.social_link_icon }/></a> }

			{ contacts.mainLink && <a title="Main link" href={ contacts.mainLink } target="_blank">
				<LinkIcon className={ style.social_link_icon }/></a> }
		</div>
	);
}

export default SocialLinks;