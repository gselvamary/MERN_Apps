import axios from 'axios';
import { GET_USERS, REGISTER_USER, DELETE_USER, USERS_LOADING, VERIFY_USER, UPDATE_USER } from './types';

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios.get('/users').then(res =>
        dispatch({
            type: GET_USERS,
            payload: res.data
        })

    )
    .catch(reject => console.log("Error in fetching"));
};

export const registerUser = user => dispatch => {
    axios.post('/users', user).then(res =>
        dispatch({
            type: REGISTER_USER,
            payload: res.data
        })
    );
};

export const deleteUser = regno => dispatch => {
    axios.delete(`/users/${regno}`).then(res =>
        dispatch({
            type: DELETE_USER,
            payload: regno
        })
    );
};

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};

export const fetchUser = regno => dispatch => {
        axios.get(`/users/${regno}`)
            .then(res => 
                dispatch({
                    type: VERIFY_USER,
                    payload: res.data
                }))
            .catch(reject => console.log("Error in fetching"));
};

export const updateUser = regno => dispatch => {
    axios.patch(`/users/${regno}`)
        .then(res => 
            dispatch({
                type: VERIFY_USER,
                payload: res.data
            }))
        .catch(reject => console.log("Error in fetching"));
};