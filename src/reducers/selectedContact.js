import { SELECT_CONTACT } from '../constants';

const selectedContact = (state = null, action) => {
    switch (action.type) {
        case SELECT_CONTACT:
            return action.contact;
        default:
            return state;
    }
}

export default selectedContact;