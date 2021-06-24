import React from "react";
import style from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const AddPostMessage = (props) => {

	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit} className={style.postMessage_form}>
			<Field component={'textarea'} name='newPostMessage' placeholder='write a message'/>
			<button>Add post</button>
		</form>
	)
}

const AddPostMessageReduxForm = reduxForm({form: 'postMessageForm'})(AddPostMessage)


const Post = (props) => {

	const {likesCount, message, name, img} = props

	return (
		<div className={style.postMessage_wrapper}>
			<div className={style.postMessage_box}>
				<div className={style.postMessage_user}>
					<div className={style.postMessage_img_Wrapper}>
						<img src={img} alt='user_avatar'/>
					</div>
					<p className={style.user_name}>{name}</p>
				</div>
				<div className={style.postMessage_message_box}>
					<p>{message}</p>
					<div className={style.likesCount_box}><ThumbUpIcon className={style.likeIcon}/><span>{likesCount}</span></div>
				</div>
			</div>
		</div>
	)
}

const ProfilePosts = (props) => {

	const {postData} = props

	const post = postData.map(p => <Post key={p.id} {...p}/>)

	const addNewPosMessage = (values) => {
		props.addPostMessage(values.newPostMessage)
	}

	return (
		<div className={style.posts_wrapper}>
			<AddPostMessageReduxForm onSubmit={addNewPosMessage}/>
			{post}
		</div>
	)
}

export default ProfilePosts