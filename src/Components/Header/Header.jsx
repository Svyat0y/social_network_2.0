import React from "react";
import style from "./Header.module.css";

const Header = () => {

	return (
		<header className={style.header}>
			<div className={style.logo}>LOGO</div>
			<div className={style.actionLogout_box}>logout</div>
		</header>
	);
}

export default Header;