import React, {useEffect} from "react";
import {connect} from "react-redux";
import style from "./Users.module.css";
import {followAccept, requestUsers, unfollowAccept} from "../../../Redux/users-reducer";
import images from "../../../assets/images/images";
import Pagination from "../../Common/Pagination";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";


// userItem component
const User = ({userName, userImg, userStatus, userId, followAccept, followed, unfollowAccept, followingInProgress}) => {
	return (
		<div className={style.user_block_wrapper}>
			<div className={style.user_box_left}>
				<NavLink to={'/profile/' + userId} className={style.img_wrapper}>
					<img src={userImg || images.imgAvatarNotFound} alt="userAvatar"/>
				</NavLink>
				{
					followed
						?
						<Button disabled={followingInProgress.some(id => id === userId)} className={followed ? "followed" : ""} variant="contained"
								onClick={()=> unfollowAccept(userId)}
						>Unfollow</Button>
						:
						<Button disabled={followingInProgress.some(id => id === userId)} variant="contained"
								onClick={()=> followAccept(userId)}
						>Follow</Button>
				}

			</div>
			<div className={style.user_box_right}>
				<span className={style.status}><span className={style.name}>Name: </span>{userName}</span>
				<span className={style.status}><span className={style.name}>Status: </span>{userStatus}</span>
			</div>
		</div>
	)
}


const Users = (props) => {

	const {users, totalCount, pageSize, currentPage, onPageChanged, followAccept, unfollowAccept, followingInProgress} = props

	const user = users.map(u => <User
		key={u.id}
		userName={u.name}
		userId={u.id}
		userImg={u.photos.small}
		userStatus={u.status}
		followed={u.followed}
		followAccept={followAccept}
		unfollowAccept={unfollowAccept}
		followingInProgress={followingInProgress}/>)

	return (
		<>
			<Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
			<div className={style.users_wrapper}>
				{user}
			</div>
		</>
	);
}


const UsersContainer = (props) => {

	useEffect(() => {
		props.requestUsers(props.currentPage, props.pageSize)
	}, [])

	const onPageChanged = (currentPage) => {
		props.requestUsers(currentPage, props.pageSize)
	}

	return (
		<Users {...props} onPageChanged={onPageChanged}/>
	)
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	currentPage: state.usersPage.currentPage,
	pageSize: state.usersPage.pageSize,
	totalCount: state.usersPage.totalCount,
	followingInProgress: state.usersPage.followingInProgress
})

export default connect(mapStateToProps, {requestUsers, followAccept, unfollowAccept})(UsersContainer)