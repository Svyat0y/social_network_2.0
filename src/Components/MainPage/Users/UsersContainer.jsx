import React, {useEffect} from "react";
import {connect} from "react-redux";
import {followAccept, requestUsers, unfollowAccept} from "../../../Redux/users-reducer";
import Users from "./Users";

const UsersContainer = (props) => {

	const {currentPage, pageSize} = props

	useEffect(() => {props.requestUsers(currentPage, pageSize)}, [])

	const onPageChanged = (currentPage) => props.requestUsers(currentPage, pageSize)

	return <Users {...props} onPageChanged={onPageChanged}/>
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	currentPage: state.usersPage.currentPage,
	pageSize: state.usersPage.pageSize,
	totalCount: state.usersPage.totalCount,
	followingInProgress: state.usersPage.followingInProgress,
	isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps, {requestUsers, followAccept, unfollowAccept})(UsersContainer);