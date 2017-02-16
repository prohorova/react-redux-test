import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

const contacts = [
    {'name': 'contact 1'},
    {'name': 'contact 2'},
    {'name': 'contact 3'}
];

let setup = (errorMessage) => {
    const props = {
        contacts,
        errorMessage
    };

    const enzymeWrapper = shallow(<App {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('Search component', () => {
    it('should render error if present', () => {
        const errorMessage = 'Error message';
        const { enzymeWrapper } = setup(errorMessage);
        expect(enzymeWrapper.find('.alert-danger').text()).toEqual(errorMessage);
    })

    it('should not render error if not present', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.alert-danger').length).toEqual(0);
    })

    it('should render search component', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('Search').length).toEqual(1);
    })

    it('should render contact details component', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('ContactDetails').length).toEqual(1);
    })

    it('should render contacts component', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('Contacts').length).toEqual(1);
    })

})

