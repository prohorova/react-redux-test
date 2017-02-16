import searchRequest from './searchRequest';
import { SEARCH_CONTACTS } from '../constants';

describe('searchRequest reducer', () => {
    const initialState = '';
    const request = 'Request';
    it('should return initial state', () => {
        expect(searchRequest(undefined, {})).toEqual(initialState);
    })

    it('should handle SEARCH_CONTACTS', () => {
        expect(searchRequest(initialState, {
            type: SEARCH_CONTACTS, 
            searchRequest: request
        })).toEqual(request);
    })
})