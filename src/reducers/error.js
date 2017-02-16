import { FETCH_CONTACTS_ERROR } from '../constants';

const error = (state = '', action) => {
    switch (action.type) {
        case FETCH_CONTACTS_ERROR:
            return action.message || 'An error occurred';
        default:
            return state;
    }
};

export default error;