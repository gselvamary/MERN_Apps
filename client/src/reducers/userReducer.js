import {
  REGISTER_USER,
  GET_USERS,
  DELETE_USER,
  USERS_LOADING
} from '../actions/types';
//import uuid from 'uuid';

const initialState = {
  users: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      };
    case REGISTER_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}