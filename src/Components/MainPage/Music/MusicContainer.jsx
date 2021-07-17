import React, { useEffect } from "react";
import style from "./Music.module.css";
import { connect } from "react-redux";
import { closeMenu } from "../../../Redux/side-bar-reducer";

const MusicContainer = (props) => {

	const { closeMenu } = props

	// close the menu after rendering the selected component
	useEffect(() => {
		setTimeout(() => closeMenu(), 250)
	}, [])

	return <div className={ style.music_wrapper }>Expected in the future!</div>
}

export default connect(null, { closeMenu })(MusicContainer);