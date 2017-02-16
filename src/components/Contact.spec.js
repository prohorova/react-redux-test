import { shallow } from 'enzyme';
import React from 'react';
import Contact from './Contact';

const contact = {
    "general": {
      "firstName": "Liana",
      "lastName": "Crooks",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
    },
    "job": {
      "company": "Ledner, Johnson and Predovic",
      "title": "Investor Functionality Coordinator"
    }
};

let setup = (selectedContact) => {
    const props = {
        contact,
        selectedContact,
        onSelectContact: jest.fn() 
    };

    const enzymeWrapper = shallow(<Contact {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('Contact component', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.contact-name').text())
            .toEqual(contact.general.firstName + ' ' + contact.general.lastName);
        expect(enzymeWrapper.find('.job-title').text()).toEqual(contact.job.title);
        expect(enzymeWrapper.find('img').prop('src')).toEqual(contact.general.avatar);
    })

    it('should highlight contact if it\'s selected', () => {
        const { enzymeWrapper } = setup(contact);
        expect(enzymeWrapper.find('li').hasClass('selected')).toEqual(true);
    })

    it('should not highlight contact if it\'s not selected', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('li').hasClass('selected')).toEqual(false);
    })

    it('should select contact when clicked', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.onSelectContact.mock.calls.length).toEqual(0);
        enzymeWrapper.find('.client').props().onClick();
        expect(props.onSelectContact.mock.calls.length).toEqual(1);
    })
})

