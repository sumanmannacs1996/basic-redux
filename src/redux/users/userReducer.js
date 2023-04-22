import axios from "axios";
import { FETCH_USER_FALURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionType";
import { fetchUserFalure, fetchUserRequest, fetchUserSuccess } from "./userAction";

const initialState = {
    loading: false,
    name: '',
    error: ''
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                name: '',
                error: ''
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                name: payload.name,
                error: ''
            }
        case FETCH_USER_FALURE:
            return {
                ...state,
                loading: false,
                name: '',
                error: payload
            }
        default: return state
    }
}

export const fetchUsers = (id) => (dispatch) => {
    dispatch(fetchUserRequest(id))
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            dispatch(fetchUserSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchUserFalure(error.message))
        })
}