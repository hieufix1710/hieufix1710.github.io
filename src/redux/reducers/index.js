import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
// import UserReducer from './UserReducer';


export default combineReducers({
  app: AppReducer,
  // user: UserReducer
})