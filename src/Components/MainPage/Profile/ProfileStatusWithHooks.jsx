import React, {useEffect, useState} from "react";
import style from "./Profile.module.css";

const ProfileStatusWithHooks = (props) => {

	const {status, updateUserStatus, userId} = props

	const [editMode, setEditMode] = useState(false)
	const [activeStatus, setActiveStatus] = useState(status)

	useEffect(() => {
		setActiveStatus(status)
	}, [status])

	const activatedEditMode = () => {
		if (userId === undefined) setEditMode(true)
	}

	const deactivatedEditMode = () => {
		setEditMode(false);
		updateUserStatus(activeStatus)
	}

	const updateLocalStatus = (e) => setActiveStatus(e.target.value)

	const handleFocus = (e) => e.target.select()

	return (
		<div className={style.profile_status_wrapper}>
			{editMode
				? <input onBlur={deactivatedEditMode} type="text" onChange={updateLocalStatus} value={activeStatus}
						 onFocus={handleFocus}/>
				: <span onClick={activatedEditMode}>{status}</span>}
		</div>
	);
}

export default ProfileStatusWithHooks;