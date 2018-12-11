import axios from 'axios';
import { GET_USERS, REGISTER_USER, DELETE_USER, USERS_LOADING } from './types';

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios.get('/users').then(res =>
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    );
};

export const registerUser = user => dispatch => {
    axios.post('/users', user).then(res =>
        dispatch({
            type: REGISTER_USER,
            payload: res.data
        })
    );
};

export const deleteUser = id => dispatch => {
    axios.delete(`/users/${id}`).then(res =>
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    );
};

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};