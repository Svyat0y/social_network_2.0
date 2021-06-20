import React from "react";
import style from "./Aside.module.css"
import {NavLink} from "react-router-dom";
import ConnectedAvatarsContainer from "./AvatarsContainer/AvatarsContainer";

const Aside = () => {
	return (
		<aside className={style.aside}>
				<ul className={style.nav}>
					<li><NavLink to="/profile" activeClassName={style.active_link}>Profile</NavLink></li>
					<li><NavLink to="/messages" activeClassName={style.active_link}>Messages</NavLink></li>
					<li><NavLink to="/music" activeClassName={style.active_link}>Music</NavLink></li>
					<li><NavLink to="/notifications" activeClassName={style.active_link}>Notifications</NavLink></li>
					<li><NavLink to="/users" activeClassName={style.active_link}>Users</NavLink></li>
					<li><NavLink to="/settings" activeClassName={style.active_link}>Settings</NavLink></li>
				</ul>
			<div>
				<ConnectedAvatarsContainer/>
			</div>
		</aside>
	);
}

export default Aside;