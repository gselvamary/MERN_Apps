import {
    REGISTER_SESSIONS,
    SESSIONS_LOADING,
    GET_SESSIONS
} from '../actions/types';

const initialState = {
    sessions: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SESSIONS:
            return {
                ...state,
                sessions: action.payload,
                loading: false
            };
        case REGISTER_SESSIONS:
            return {
                ...state,
                sessions: [action.payload, ...state.sessions]
            };
        case SESSIONS_LOADING:
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