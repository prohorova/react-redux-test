import { 
    FETCH_CONTACTS, 
    FETCH_CONTACTS_ERROR, 
    FETCH_CONTACTS_SUCCESS, 
    SEARCH_CONTACTS, 
    SELECT_CONTACT 
} from '../constants';
import AppAPI from '../api/AppAPI';

let AppActionCreators = {
    fetchContacts() {
        return (dispatch) => {
            dispatch({type: FETCH_CONTACTS});
            return AppAPI.fetchContacts().then(contacts => {
                dispatch({type: FETCH_CONTACTS_SUCCESS, contacts})
            }).catch(error => {
                dispatch({type: FETCH_CONTACTS_ERROR, message: error.message})
            })
        }
    },

    searchContacts(searchRequest) {
        return {
            type: SEARCH_CONTACTS,
            searchRequest
        }
    },

    selectContact(contact) {
        return {
            type: SELECT_CONTACT,
            contact
        }
    }
};

export default AppActionCreators;