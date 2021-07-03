import React, {useEffect} from "react";
import style from "./Aside.module.css";
import {NavLink} from "react-router-dom";
import ConnectedAvatarsContainer from "./AvatarsContainer/AvatarsContainer";
import {connect} from "react-redux";

const Aside = (props) => {

	const {menuVisible} = props

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.overflow = menuVisible ? 'hidden' : 'auto';
	}, [menuVisible])

	return (
		<aside className={`${style.aside} ${menuVisible ? style.asideOpen : ""}`}>
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

const mapStateToProps = (state) => ({
	menuVisible: state.sideBar.menuVisible
})

export default connect(mapStateToProps, null)(Aside);