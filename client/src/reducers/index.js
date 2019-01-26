
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import deptReducer from './deptReducer';
import sessionReducer from './sessionReducer';
import authReducers from './authReducers';
import errorReducers from './errorReducers';




export default combineReducers({
  user: userReducer,
  dept: deptReducer,
  session: sessionReducer,
  auth: authReducers,
  errors: errorReducers

});
//5th video