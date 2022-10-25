import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService } from '../../services/userService'
import { toast } from "react-toastify"
//gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        dispatch({ type: actionTypes.FETCH_GENDER_START })
        try {
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFaided())
            }
        } catch (e) {
            dispatch(fetchGenderFaided())
            console.log(e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

//position

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFaided())
            }
        } catch (e) {
            dispatch(fetchPositionFaided())
            console.log(e);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})
//role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFaided())
            }
        } catch (e) {
            dispatch(fetchRoleFaided())
            console.log(e);
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})

// RESGISTER USER

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a user successed!")
                dispatch(createUserSuccess(data))
                dispatch(fetchAllUserStart())
            } else {
                dispatch((CreateUserFaided))
            }
        } catch (e) {
            dispatch(CreateUserFaided())
            console.log(e);
        }
    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const CreateUserFaided = () => ({
    type: actionTypes.CREATE_USER_FAIDED
})

//display user

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users))
            } else {
                dispatch((fetchAllUserFaided))
            }
        } catch (e) {
            dispatch(fetchAllUserFaided())
            console.log(e);
        }
    }
}

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUserFaided = () => ({
    type: actionTypes.FETCH_ALL_USER_FAIDED
})

// delete user

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete user successed!")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Delete user faided!")
                dispatch((deleteUserFaided))
            }
        } catch (e) {
            dispatch(deleteUserFaided())
            console.log(e);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFaided = () => ({
    type: actionTypes.DELETE_USER_FAIDED
})

//edit user
export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            console.log(res)
            if (res && res.errCode === 0) {
                toast.success("Update user successed!")
                dispatch(editUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Update user faided!")
                dispatch((editUserFaided))
            }
        } catch (e) {
            dispatch(editUserFaided())
            console.log(e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFaided = () => ({
    type: actionTypes.EDIT_USER_FAIDED
})