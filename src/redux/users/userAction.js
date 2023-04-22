import { FETCH_USER_FALURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionType"

export const fetchUserRequest = (userId) => {
    return {
        type: FETCH_USER_REQUEST,
        payload: userId
    }
}

export const fetchUserSuccess = (userData) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userData
    }
}

export const fetchUserFalure = (errorMessage) => {
    return {
        type: FETCH_USER_FALURE,
        payload: errorMessage
    }
}