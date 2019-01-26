import axios from 'axios';
import { REGISTER_SESSIONS, GET_SESSIONS, SESSIONS_LOADING } from './types';

export const getSessions = () => dispatch => {
    dispatch(setSessionsLoading());
    axios.get('/sessions').then(res =>
        dispatch({
            type: GET_SESSIONS,
            payload: res.data
        })
    );
};

export const registerSession = session => dispatch => {
    axios.patch('/sessions', session).then(res =>
        dispatch({
            type: REGISTER_SESSIONS,
            payload: res.data
        })
    );
};


export const setSessionsLoading = () => {
    return {
        type: SESSIONS_LOADING
    };
};