import {reset} from "redux-form";

const SEND_MY_MESSAGE_TEXT = "SEND_MY_MESSAGE_TEXT"
const SET_OPEN_DIALOG = "SET_OPEN_DIALOG"


const initialState = {
	usersWithDialogs: [
		{
			id: 3450,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			userName: 'Sponge Bob'
		},
		{
			id: 4560,
			userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
			userName: 'Volk'
		},
		{
			id: 2340,
			userImg: 'https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg',
			userName: 'Dasha'
		},
		{
			id: 3440,
			userImg: 'https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg',
			userName: 'Niko'
		},
		{
			id: 4000,
			userImg: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg',
			userName: 'Julia'
		},
		{
			id: 5567,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			userName: 'Vlad'
		}
	],
	dialogsMessages: [{id: 0, message: 'hi'}, {id: 1, message: 'how are u?'}, {id: 2, message: 'you here?'}],
	openDialogWithUser: false
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {

		case SEND_MY_MESSAGE_TEXT:
			if (action.payload && action.payload.replace(/\s/g, "")) {
				return {
					...state, dialogsMessages: [...state.dialogsMessages, {
						id: 3,
						message: action.payload
					}]
				}
			}
			return state

		case SET_OPEN_DIALOG:
			return {...state, openDialogWithUser: action.payload}

		default:
			return state
	}
}

//action creators
export const sendMyMessage = (body) => ({type: SEND_MY_MESSAGE_TEXT, payload: body})
export const setOpenDialogWithUser = (isOpen) => ({type: SET_OPEN_DIALOG, payload: isOpen})


// thunk creators

// send message in dialogs
export const sendMessage = (userId, body) => (dispatch) => {
	dispatch(sendMyMessage(body))
	dispatch(reset("addDialogMessageForm"))
}

export const openUserslistAction = (isOpen) => (dispatch) => {
	dispatch(setOpenDialogWithUser(isOpen))
}

export default messagesReducer;