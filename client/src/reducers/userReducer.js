import {
  REGISTER_USER,
  GET_USERS,
  DELETE_USER,
  USERS_LOADING,
  VERIFY_USER
} from '../actions/types';

const initialState = {
  users: [],
  loading: false
};

export default function (state = initialState, action) {
  if (action.type === VERIFY_USER) {
    console.log('users:', action.payload);
    console.log("loading: ", false);
  }
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
        users: state.users.filter(user => user.regno !== action.payload),
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
    case VERIFY_USER:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

/*


*/