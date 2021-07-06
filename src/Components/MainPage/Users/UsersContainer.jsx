import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {followAccept, requestUsers, unfollowAccept} from "../../../Redux/users-reducer";
import Users from "./Users";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalCount,
	getUsers
} from "../../../Redux/selectors/users-selectors";
import {closeMenu} from "../../../Redux/side-bar-reducer";

const UsersContainer = (props) => {

	const {currentPage, pageSize, closeMenu} = props

	useEffect(() => {
		props.requestUsers(currentPage, pageSize)
		setTimeout(() => closeMenu(), 250)
	}, [])

	const onPageChanged = useCallback(currentPage => {
		props.requestUsers(currentPage, pageSize)
	}, [currentPage]);

	// const onPageChanged = (currentPage) => props.requestUsers(currentPage, pageSize); console.log("asd")

	return <Users {...props} onPageChanged={onPageChanged}/>
}

const mapStateToProps = (state) => ({
	users: getUsers(state),
	currentPage: getCurrentPage(state),
	pageSize: getPageSize(state),
	totalCount: getTotalCount(state),
	followingInProgress: getFollowingInProgress(state),
	isFetching: getIsFetching(state)
})

export default connect(mapStateToProps, {requestUsers, followAccept, unfollowAccept, closeMenu})(UsersContainer);