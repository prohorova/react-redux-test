import { shallow } from 'enzyme';
import React from 'react';
import Contacts from './Contacts';

const contacts = [
    {'name': 'contact 1'},
    {'name': 'contact 2'},
    {'name': 'contact 3'}
];

let setup = () => {
    const props = {
        contacts,
        onSelectContact: jest.fn()
    };

    const enzymeWrapper = shallow(<Contacts {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('Contacts component', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('Contact').length).toEqual(contacts.length);
    })

})

