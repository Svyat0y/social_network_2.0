import style from "../Aside.module.css";
import {connect} from "react-redux";
import React from "react";

const AvatarItem = ({avatarName, avatarImg}) => {
	return (
		<div className={style.avatar_wrapper}>
			<div className={style.img_wrapper}>
				<img src={avatarImg} alt="userAvatar"/>
			</div>
			<span className={style.user_name}>{avatarName}</span>
		</div>
	)
}

const AvatarsContainer = ({avatarsData}) => {

	// get an avatar object from the incoming array in props
	const avatarItem = avatarsData.map(avatar => <AvatarItem key={avatar.id} avatarName={avatar.userName} avatarImg={avatar.userImg}/> )

	return (
		<div className={style.avatars_wrapper}>
			<h5>Users</h5>
			<div className={style.avatars_box}>
				{avatarItem}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	avatarsData: state.sideBar.avatarsData
})

// connected avatars container to store
export default connect(mapStateToProps, null)(AvatarsContainer)