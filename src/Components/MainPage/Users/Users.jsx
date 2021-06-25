import React from "react";
import style from "./Users.module.css";
import Pagination from "../../Common/Pagination/Pagination";s
import User from "./User";

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

export default Users