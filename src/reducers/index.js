import { combineReducers } from 'redux';
import contacts from './contacts';
import searchRequest from './searchRequest';
import selectedContact from './selectedContact';
import error from './error';

const reducers = combineReducers({
    contacts,
    searchRequest,
    selectedContact,
    error
});

export default reducers;