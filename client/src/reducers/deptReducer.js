import {
    REGISTER_DEPT,
    GET_DEPTS,
    DELETE_DEPT,
    DEPTS_LOADING
} from '../actions/types';

const initialState = {
    depts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DEPTS:
            return {
                ...state,
                depts: action.payload,
                loading: false
            };
        case DELETE_DEPT:
            return {
                ...state,
                depts: state.depts.filter(dept => dept.dept_id !== action.payload),
            };
        case REGISTER_DEPT:
            return {
                ...state,
                depts: [action.payload, ...state.depts]
            };
        case DEPTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

  /*
  
  
  */