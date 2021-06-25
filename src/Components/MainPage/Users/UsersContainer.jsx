import React, {useEffect} from "react";
import {connect} from "react-redux";
import {followAccept, requestUsers, unfollowAccept} from "../../../Redux/users-reducer";
import Users from "./Users";

const UsersContainer = (props) => {

	useEffect(() => {props.requestUsers(props.currentPage, props.pageSize)}, [])

	const onPageChanged = (currentPage) => props.requestUsers(currentPage, props.pageSize)

	return (
		<Users {...props} onPageChanged={onPageChanged}/>
	)
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	currentPage: state.usersPage.currentPage,
	pageSize: state.usersPage.pageSize,
	totalCount: state.usersPage.totalCount,
	followingInProgress: state.usersPage.followingInProgress
})

export default connect(mapStateToProps, {requestUsers, followAccept, unfollowAccept})(UsersContainer)