import React, {useEffect} from "react";
import style from "./Messages.module.css";
import {connect} from "react-redux";
import DialogsUsers from "./DialogsUsers";
import DialogsMessages from "./DialogsMessages";
import {openUserslistAction, sendMessage} from "../../../Redux/messages-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getDialogsMessages, getUsersWithDialogs} from "../../../Redux/selectors/messages-selectors";
import {closeMenu} from "../../../Redux/side-bar-reducer";

const MessagesContainer = (props) => {

	const dialogUserId = props.match.params.userId
	const {usersWithDialogs, dialogsMessages, sendMessage, closeMenu, openDialogWithUser, openUserslistAction} = props

	// close the menu after rendering the selected component
	useEffect(() => {closeMenu()},[])

	const openUserList = () => setTimeout(() => openUserslistAction(false), 200)

	const closeUserList = () => setTimeout(() => openUserslistAction(true), 200)

	return (
		<div className={style.messages_wrapper}>
			<div className={`${style.messages_users_block} ${openDialogWithUser && style.messages_users_block_isHidden}`}>
				<DialogsUsers closeUserList={closeUserList} usersWithDialogs={usersWithDialogs}/>
			</div>
			<DialogsMessages openUserList={openUserList} dialogUserId={dialogUserId} sendMessage={sendMessage} dialogsMessages={dialogsMessages} openDialogWithUser={openDialogWithUser}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	usersWithDialogs: getUsersWithDialogs(state),
	dialogsMessages: getDialogsMessages(state),
	openDialogWithUser: state.messagesPage.openDialogWithUser
})

export default compose(
	connect(mapStateToProps, {sendMessage, closeMenu, openUserslistAction}),
	withRouter
)(MessagesContainer);