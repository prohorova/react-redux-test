let containsString = function(value, string) {
    if (typeof value === 'string' && 
        value.toLowerCase().includes(string.toLowerCase())) return true;
    if (typeof value === 'object') {
        for(let i in value) {
            if(value.hasOwnProperty(i) && i !== 'avatar'){  // shouldn't search in avatar link
                let contains = containsString(value[i], string);
                if (contains) {
                    return true;
                }
            }
        }
    }
    return false;
};

export const searchForContacts = (contacts, searchString) => {
    return contacts.filter(contact => {
        return containsString(contact, searchString);
    })
};