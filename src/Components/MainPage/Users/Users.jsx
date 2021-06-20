import React from "react";
import {connect} from "react-redux";
import style from "./Users.module.css";
import {requestUsers} from "../../../Redux/users-reducer";
import images from "../../../assets/images/images";
import Pagination from "../../Common/Pagination";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";


// userItem component
const User = ({userName, userImg, userStatus, userId}) => {
	return (
		<div className={style.user_block_wrapper}>
			<div className={style.user_box_left}>
				<NavLink to={'/profile/' + userId} className={style.img_wrapper}>
					<img src={userImg || images.imgAvatarNotFound} alt="userAvatar"/>
				</NavLink>
				{/*<button onClick={() => followAccept(userId)}>Follow</button>*/}

				<Button variant="contained"
						// onClick={()=> followAccept(userId)}

						style={
					{
						background: "rgba(99,94,98, 0.7)",
						color: "white"
					}
				}>follow</Button>
			</div>
			<div className={style.user_box_right}>
				<span className={style.status}><span className={style.name}>Name: </span>{userName}</span>
				<span className={style.status}><span className={style.name}>Status: </span>{userStatus}</span>
			</div>
		</div>
	)
}


const Users = ({users, totalCount, pageSize, currentPage, onPageChanged}) => {

	const user = users.map(u => <User
		key={u.id} userName={u.name} userImg={u.photos.small} userStatus={u.status} userId={u.id}/>)

	return (
		<>
			<Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
			<div className={style.users_wrapper}>
				{user}
			</div>
		</>
	);
}

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (currentPage) => {
		this.props.requestUsers(currentPage)
	}

	render() {
		return (
			<Users users={this.props.users} onPageChanged={this.onPageChanged} {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	currentPage: state.usersPage.currentPage,
	pageSize: state.usersPage.pageSize,
	totalCount: state.usersPage.totalCount
})

export default connect(mapStateToProps, {requestUsers})(UsersContainer)