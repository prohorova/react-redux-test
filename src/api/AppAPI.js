import 'whatwg-fetch';

let AppAPI = {
    fetchContacts() {
        return fetch('contacts.json')
        .then(resp => resp.json())
    }
};

export default AppAPI;