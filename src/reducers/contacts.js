import { FETCH_CONTACTS_SUCCESS } from '../constants';

const contacts = (state = [], action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCESS:
            return action.contacts;
        default:
            return state;
    }
}

export default contacts;