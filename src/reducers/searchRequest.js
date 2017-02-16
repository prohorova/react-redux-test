import { SEARCH_CONTACTS } from '../constants';

const searchRequest = (state = '', action) => {
    switch (action.type) {
        case SEARCH_CONTACTS:
            return action.searchRequest;
        default:
            return state;
    }
}

export default searchRequest;