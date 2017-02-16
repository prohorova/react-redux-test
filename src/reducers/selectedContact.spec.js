import selectedContact from './selectedContact';
import { SELECT_CONTACT } from '../constants';

describe('selectedContact reducer', () => {
    const initialState = null;
    const contact = {
        "firstName": "Liana",
        "lastName": "Crooks"
    }
    it('should return initial state', () => {
        expect(selectedContact(undefined, {})).toEqual(initialState);
    })

    it('should handle SEARCH_CONTACTS', () => {
        expect(selectedContact(initialState, {
            type: SELECT_CONTACT, 
            contact
        })).toEqual(contact);
    })
})