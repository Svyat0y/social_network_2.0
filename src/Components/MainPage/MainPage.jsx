import React from "react";
import {Redirect, Route} from "react-router-dom";

import {hocWithLazyLoad} from "../../hoc/hocWithLazyLoad";

// components with lazy load
const ProfileContainer = React.lazy(() => import("./Profile/ProfileContainer"));
const MessagesContainer = React.lazy(() => import("./Messages/MessagesContainer"));
const Music = React.lazy(() => import("./Music/MusicContainer"));
const Notifications = React.lazy(() => import("./Notifications/NotificationsContainer"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Settings = React.lazy(() => import("./Settings/SettingsContainer"));

const MainPage = () => {
	return (
		<div className="main_page">
			<Route exact path="/" render={() => <Redirect to="/profile"/>} />
			<Route path="/profile/:userId?" render={hocWithLazyLoad(ProfileContainer)} />
			<Route path="/messages/:userId?" render={hocWithLazyLoad(MessagesContainer)} />
			<Route path="/music" render={hocWithLazyLoad(Music)} />
			<Route path="/notifications" render={hocWithLazyLoad(Notifications)} />
			<Route path="/users" render={hocWithLazyLoad(UsersContainer)} />
			<Route path="/settings" render={hocWithLazyLoad(Settings)} />
		</div>
	);
}

export default MainPage;