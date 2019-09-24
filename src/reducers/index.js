import {combineReducers} from 'redux';
import UsersReducers from './users';

const allReducers = combineReducers ({
    users: UsersReducers

});
export default allReducers