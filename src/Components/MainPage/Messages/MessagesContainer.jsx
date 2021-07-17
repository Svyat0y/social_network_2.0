import React, { useEffect } from "react";
import style from "./Messages.module.css";
import { connect } from "react-redux";
import DialogsUsers from "./DialogsUsers";
import DialogsMessages from "./DialogsMessages";
import { openUsersListAction, sendMessage } from "../../../Redux/messages-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getDialogsMessages, getOpenDialogWithUser, getUsersWithDialogs } from "../../../Redux/selectors/messages-selectors";
import { closeMenu } from "../../../Redux/side-bar-reducer";

const MessagesContainer = (props) => {

	const { usersWithDialogs, dialogsMessages, sendMessage, closeMenu, openDialogWithUser, openUsersListAction } = props

	// close the menu after rendering the selected component
	useEffect(() => {
		setTimeout(() => closeMenu(), 250)
	}, [])

	const openUserList = () => setTimeout(() => openUsersListAction(false), 250)

	const closeUserList = () => setTimeout(() => openUsersListAction(true), 250)

	return (
		<div className={ style.messages_wrapper }>
			<div className={ `${ style.messages_users_block } ${ openDialogWithUser && style.messages_users_block_isHidden }` }>
				<DialogsUsers closeUserList={ closeUserList } usersWithDialogs={ usersWithDialogs }/>
			</div>
			<DialogsMessages openUserList={ openUserList } sendMessage={ sendMessage }
							 dialogsMessages={ dialogsMessages } openDialogWithUser={ openDialogWithUser }/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	usersWithDialogs: getUsersWithDialogs(state),
	dialogsMessages: getDialogsMessages(state),
	openDialogWithUser: getOpenDialogWithUser(state)
})

export default compose(
	withRouter,
	connect(mapStateToProps, { sendMessage, closeMenu, openUsersListAction })
)(MessagesContainer);