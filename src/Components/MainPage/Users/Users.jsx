import React from "react";
import style from "./Users.module.css";
import Pagination from "../../Common/Pagination/Pagination";
import User from "./User";
import Preloader from "../../Common/Preloader/Preloader";

const Users = (props) => {

	const {users, totalCount, pageSize, currentPage, onPageChanged, followAccept, unfollowAccept, followingInProgress, isFetching} = props

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
			{isFetching
			? <Preloader />
			: <div className={style.users_wrapper}>
					{user}
				</div>}
		</>
	);
}

export default Users;