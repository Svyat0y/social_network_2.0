

// initial state for side-bar avatars (static)
const initialState = {
	avatarsData: [
		{id: 0,
		userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
		userName: 'Andy'},
		{id: 1,
			userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
			userName: 'Panda'},
		{id: 2,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			userName: 'Dasha'},
		{id: 0,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			userName: 'Andy'},
		{id: 1,
			userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
			userName: 'Panda'},
		{id: 2,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			userName: 'Dasha'}
	]
}

const sideBarReducer = (state = initialState, action) => {
	switch(action.type) {

	default:
	return state
	}
}

export default sideBarReducer;