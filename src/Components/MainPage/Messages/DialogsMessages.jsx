import React from "react";
import style from "./Messages.module.css";
import AddDialogMessageFormRedux from "./AddDialogMessageForm";

const Messages = (props) => {

	const {message} = props

	return (
		<div className={style.messages_box}>
			<p>{message}</p>
		</div>
	)
}

const DialogsMessages = (props) => {

	const {dialogsMessages, sendMessage, dialogUserId, openDialogWithUser, openUserList} = props
	const messages = dialogsMessages.map(m => <Messages key={m.id} message={m.message}/>)

	const addNewDialogMessage = (formValues) => {
		sendMessage(dialogUserId, formValues.newDialogMessage)
	}

	return (
		<div className={`${style.dialogs_messages_block} ${openDialogWithUser && style.dialogs_messages_block_isOpen}`}>
			<div className={style.dialogs_messages_container}>
				{messages}
			</div>
			<div className={style.dialogs_messages_footer}>
				<AddDialogMessageFormRedux onSubmit={addNewDialogMessage}/>
			</div>
			<div className={style.back_to_listUsers}><button onClick={openUserList}>{"<< back"}</button></div>
		</div>
	);
}

export default DialogsMessages;