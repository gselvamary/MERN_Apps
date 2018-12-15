
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import deptReducer from './deptReducer';

export default combineReducers({
  user: userReducer,
  dept: deptReducer
});
//5th video