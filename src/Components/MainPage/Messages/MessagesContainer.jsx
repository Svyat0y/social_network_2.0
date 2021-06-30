import React from "react";
import style from "./Messages.module.css";
import {connect} from "react-redux";
import DialogsUsers from "./DialogsUsers";
import DialogsMessages from "./DialogsMessages";
import {sendMessage} from "../../../Redux/messages-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getDialogsMessages, getUsersWithDialogs} from "../../../Redux/selectors/messages-selectors";

const MessagesContainer = (props) => {

	const dialogUserId = props.match.params.userId
	const {usersWithDialogs, dialogsMessages, sendMessage} = props

	return (
		<div className={style.messages_wrapper}>
			<div className={style.messages_users_block}>
				<DialogsUsers usersWithDialogs={usersWithDialogs}/>
			</div>
			<DialogsMessages dialogUserId={dialogUserId} sendMessage={sendMessage} dialogsMessages={dialogsMessages}/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	usersWithDialogs: getUsersWithDialogs(state),
	dialogsMessages: getDialogsMessages(state)
})

export default compose(
	connect(mapStateToProps, {sendMessage}),
	withRouter
)(MessagesContainer);