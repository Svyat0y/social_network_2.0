export const getUsersWithDialogs = (state) => {
	return state.messagesPage.usersWithDialogs
}

export const getDialogsMessages = (state) => {
	return state.messagesPage.dialogsMessages
}

export const getOpenDialogWithUser = (state) => {
	return state.messagesPage.openDialogWithUser
}