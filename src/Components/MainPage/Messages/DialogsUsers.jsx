import {NavLink} from "react-router-dom";
import style from "./Messages.module.css";
import React from "react";

const DialogsUser = (props) => {

	const {id, userName, userImg, closeUserList} = props

	return (
		<NavLink to={"/messages/" + id} activeClassName={style.active_dialog_user} onClick={closeUserList}>
			<div className={style.dialogsUser_wrapper}>
				<div className={style.dialogsUser_img_wrapper}>
					<img src={userImg} alt="user_avatar"/>
				</div>
				<span className={style.dialogsUser_name}>{userName}</span>
			</div>
		</NavLink>
	);
}

const DialogsUsers = (props) => {

	const {usersWithDialogs, closeUserList} = props

	const dialogsUser = usersWithDialogs.map(u => <DialogsUser key={u.id} {...u} closeUserList={closeUserList}/>)

	return (
		<>
			{dialogsUser}
		</>
	);
}

export default DialogsUsers;