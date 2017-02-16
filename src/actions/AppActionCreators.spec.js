import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const contactsData = [
  {
    "firstName": "Liana",
    "lastName": "Crooks"
  }
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import AppActionCreators from './AppActionCreators';
import { 
    FETCH_CONTACTS, 
    FETCH_CONTACTS_ERROR, 
    FETCH_CONTACTS_SUCCESS, 
    SEARCH_CONTACTS, 
    SELECT_CONTACT 
} from '../constants';

describe('test sync action creators', () => {
    it('should create an action to search contacts', () => {
        let searchRequest = 'liana';
        let action = {
            type: SEARCH_CONTACTS,
            searchRequest
        };
        expect(AppActionCreators.searchContacts(searchRequest)).toEqual(action);
    });

    it('should create an action to search contacts', () => {
        let searchRequest = 'liana';
        let action = {
            type: SEARCH_CONTACTS,
            searchRequest
        };
        expect(AppActionCreators.searchContacts(searchRequest)).toEqual(action);
    })
});

describe('test async action creators', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates a FETCH_CONTACTS_SUCCESS action when contacts have been fetched', () => {
        fetchMock.mock('contacts.json', {body: contactsData});

        const expectedActions = [
            {type: FETCH_CONTACTS},
            {type: FETCH_CONTACTS_SUCCESS, contacts: contactsData}
        ];
        const store = mockStore({contacts: []});

        return store.dispatch(AppActionCreators.fetchContacts())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

    it('creates a FETCH_CONTACTS_ERROR action when there is an error when fetching contacts', () => {
        fetchMock.mock('contacts.json', {status: 404});

        const expectedActions = [
            {type: FETCH_CONTACTS},
            {type: FETCH_CONTACTS_ERROR, message: 'Unexpected end of JSON input'}
        ];
        const store = mockStore({contacts: []});

        return store.dispatch(AppActionCreators.fetchContacts())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})