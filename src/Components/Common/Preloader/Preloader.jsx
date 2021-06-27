import React from "react";
import style from "./Preloader.module.css";

const Preloader = (props) => {
	return (
		<div className={style.preloader_wrapper}>
			<div className={style.fetching}>

			</div>
		</div>
	);
}

export default Preloader;