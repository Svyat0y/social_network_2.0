// initial state for side-bar avatars (static)
const initialState = {
	avatarsData: [
		{
			id: 0,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			userName: 'Andy'
		},
		{
			id: 1,
			userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
			userName: 'Panda'
		},
		{
			id: 2,
			userImg: 'https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg',
			userName: 'Dasha'
		},
		{
			id: 3,
			userImg: 'https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg',
			userName: 'Niko'
		},
		{
			id: 4,
			userImg: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg',
			userName: 'July'
		},
		{
			id: 5,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			userName: 'Vlad'
		}
	]
}

const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {

		default:
			return state
	}
}

export default sideBarReducer;