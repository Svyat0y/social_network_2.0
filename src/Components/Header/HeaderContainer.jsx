import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";

const HeaderContainer = (props) => {

	return (
		<Header {...props}/>
	);
}

export default connect(null, {logout})(HeaderContainer);