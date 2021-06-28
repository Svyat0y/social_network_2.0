import React from "react";
import style from "./Header.module.css";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

const HeaderContainer = (props) => {

	const {logout} = props

	const getLogout = () => logout()

	return (
		<header className={style.header}>
			<div className={style.logo}>LOGO</div>
			<div onClick={getLogout} className={style.actionLogout_box}>logout</div>
		</header>
	);
}

export default connect(null, {logout})(HeaderContainer);