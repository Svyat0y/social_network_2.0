import * as axios from "axios";

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': 'a1cfc85a-7e70-4120-8bed-62fbd526678c'
		// 'API-KEY': 'bb8e013c-9223-4dee-8a5a-b96156c04ec6'
	}
})

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data)
	},
	updateUserStatus(status) {
		return instance.put(`profile/status`, {status}).then(response => response.data)
	},
	updateBioProfile(profile) {
		return instance.put(`profile`, profile).then(response => response.data)
	}

}

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data)
	}
}

export const subscribeAPI = {
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data)
	}
}

export const securityAPI = {
	getCaptcha() {
		return instance.get(`security/get-captcha-url`).then(response => response.data)
	}
}

// export const messagesAPI = {
// 	sendMessage(userId, body) {
// 		return instance.post(`dialogs/${userId}/messages`, {body}).then(response => response.data)
// 	}
// }