import contacts from './contacts';
import { FETCH_CONTACTS_SUCCESS } from '../constants';

describe('contacts reducer', () => {
    const initialState = [];
    const contactsData = [
        {
            "firstName": "Liana",
            "lastName": "Crooks"
        }
    ];
    it('should return initial state', () => {
        expect(contacts(undefined, {})).toEqual(initialState);
    })

    it('should handle FETCH_CONTACTS_SUCCESS', () => {
        expect(contacts(initialState, {
            type: FETCH_CONTACTS_SUCCESS, 
            contacts: contactsData
        })).toEqual(contactsData);
    })
})