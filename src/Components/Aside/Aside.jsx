import React from "react";
import style from "./Aside.module.css";
import {NavLink} from "react-router-dom";
import ConnectedAvatarsContainer from "./AvatarsContainer/AvatarsContainer";

const Aside = () => {
	return (
		<aside className={style.aside}>
				<ul className={style.nav}>
					<li><NavLink to="/profile" activeClassName={style.active_link}><span>Profile</span></NavLink></li>
					<li><NavLink to="/messages" activeClassName={style.active_link}><span>Messages</span></NavLink></li>
					<li><NavLink to="/music" activeClassName={style.active_link}><span>Music</span></NavLink></li>
					<li><NavLink to="/notifications" activeClassName={style.active_link}><span>Notifications</span></NavLink></li>
					<li><NavLink to="/users" activeClassName={style.active_link}><span>Users</span></NavLink></li>
					<li><NavLink to="/settings" activeClassName={style.active_link}><span>Settings</span></NavLink></li>
				</ul>
			<div>
				<ConnectedAvatarsContainer/>
			</div>
		</aside>
	);
}

export default Aside;