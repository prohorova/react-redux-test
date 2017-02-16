import error from './error';
import { FETCH_CONTACTS_ERROR } from '../constants';

describe('error reducer', () => {
    const initialState = '';
    const message = 'Some error';
    it('should return initial state', () => {
        expect(error(undefined, {})).toEqual(initialState);
    })

    it('should handle FETCH_CONTACTS_ERROR', () => {
        expect(error(initialState, {
            type: FETCH_CONTACTS_ERROR, 
            message
        })).toEqual(message);
    })
})