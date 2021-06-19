import React from "react";
import style from "./Aside.module.css"
import {NavLink} from "react-router-dom";
import ConnectedAvatarsContainer from "./AvatarsContainer/AvatarsContainer";

const Aside = () => {
	return (
		<aside className={style.aside}>
			<div className={style.aside_navigation_wrapper}>
				<ul className={style.nav}>
					<li><NavLink to="/profile" activeClassName={style.active_link}>Profile</NavLink></li>
					<li><NavLink to="/Messages" activeClassName={style.active_link}>Messages</NavLink></li>
					<li><NavLink to="/Music" activeClassName={style.active_link}>Music</NavLink></li>
					<li><NavLink to="/Notifications" activeClassName={style.active_link}>Notifications</NavLink></li>
					<li><NavLink to="/Users" activeClassName={style.active_link}>Users</NavLink></li>
					<li><NavLink to="/Settings" activeClassName={style.active_link}>Settings</NavLink></li>
				</ul>
			</div>
			<div>
				<ConnectedAvatarsContainer/>
			</div>
		</aside>
	);
}

export default Aside;