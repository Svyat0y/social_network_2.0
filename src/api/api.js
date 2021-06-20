import * as axios from "axios";

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': 'a1cfc85a-7e70-4120-8bed-62fbd526678c'
		// 'API-KEY': 'bb8e013c-9223-4dee-8a5a-b96156c04ec6'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data)
	}
}

// export const followedAPI = {
// 	follow(userId) {
// 		return instance.post(`follow/${userId}`).then(response => response.data)
// 	},
// 	unfollow(userId) {
// 		return instance.delete(`follow/${userId}`).then(response => response.data)
// 	}
// }