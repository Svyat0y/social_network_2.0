import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import images from "../../../assets/images/images";
import {Button} from "@material-ui/core";


const User = ({userName, userImg, userStatus, userId, followAccept, followed, unfollowAccept, followingInProgress}) => {

	return (
		<div className={style.user_block_wrapper}>
			<div className={style.user_box_left}>
				<NavLink to={"/profile/" + userId} className={style.img_wrapper}>
					<img src={userImg || images.imgAvatarNotFound} alt="userAvatar"/>
				</NavLink>
				{
					followed
						?
						<Button disabled={followingInProgress.some(id => id === userId)} className={followed && "followed" || ""}
								variant="contained"
								onClick={() => unfollowAccept(userId)}
						>Unfollow</Button>
						:
						<Button disabled={followingInProgress.some(id => id === userId)} variant="contained"
								onClick={() => followAccept(userId)}
						>Follow</Button>
				}

			</div>
			<div className={style.user_box_right}>
				<span className={style.user_title_wrapper}><span className={style.name}>Name: </span>{userName}</span>
				<span className={style.user_title_wrapper}><span className={style.status}>Status: </span>{userStatus}</span>
			</div>
		</div>
	);
}

export default User;