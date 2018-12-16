import axios from 'axios';
import { REGISTER_DEPT, GET_DEPTS, DELETE_DEPT, DEPTS_LOADING } from './types';

export const getDepts = () => dispatch => {
    dispatch(setDeptsLoading());
    axios.get('/depts').then(res =>
        dispatch({
            type: GET_DEPTS,
            payload: res.data
        })
    );
};

export const registerDept = dept => dispatch => {
    axios.post('/depts', dept).then(res =>
        dispatch({
            type: REGISTER_DEPT,
            payload: res.data
        })
    );
};

export const deleteDept = dept_id => dispatch => {
    axios.delete(`/depts/${dept_id}`).then(res =>
        dispatch({
            type: DELETE_DEPT,
            payload: dept_id
        })
    );
};

export const setDeptsLoading = () => {
    return {
        type: DEPTS_LOADING
    };
};