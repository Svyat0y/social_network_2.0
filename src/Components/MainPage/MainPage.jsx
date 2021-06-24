import React from "react";
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import Music from "./Music/Music";
import Messages from "./Messages/Messages";
import Notifications from "./Notifications/Notifications";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";

const MainPage = () => {
	return (
		<div className="main_page">
			<Route exact path="/" render={() => <Redirect to="/profile"/>} />
			<Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
			<Route path="/messages" render={() => <Messages/>} />
			<Route path="/music" render={() => <Music/>} />
			<Route path="/notifications" render={() => <Notifications/>} />
			<Route path="/users" render={() => <UsersContainer/>} />
			<Route path="/settings" render={() => <Settings/>} />
		</div>
	);
}

export default MainPage;