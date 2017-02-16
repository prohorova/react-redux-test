import { shallow } from 'enzyme';
import React from 'react';
import ContactDetails from './ContactDetails';

const contact = {
    "general": {
      "firstName": "Liana",
      "lastName": "Crooks",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
    },
    "job": {
      "company": "Ledner, Johnson and Predovic",
      "title": "Investor Functionality Coordinator"
    },
    "contact": {
      "email": "Gerry_Hackett77@gmail.com",
      "phone": "(895) 984-0132"
    },
    "address": {
      "street": "1520 Zemlak Cove",
      "city": "New Devon",
      "zipCode": "42586-7898",
      "country": "Guinea-Bissau"
    }
  };

let setup = (selectedContact) => {
    const props = {
        selectedContact 
    };

    const enzymeWrapper = shallow(<ContactDetails {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('ContactDetails component', () => {
    it('should not render when there is no contact', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.wrapper').children().length).toEqual(0);
    })

    it('should render when there is a selected contact', () => {
        const { enzymeWrapper } = setup(contact);
        expect(enzymeWrapper.find('img').props().src).toEqual(contact.general.avatar);
        expect(enzymeWrapper.find('.contact-name').text())
            .toEqual(contact.general.firstName + ' ' + contact.general.lastName);
        expect(enzymeWrapper.find('.job-title').text())
            .toEqual(contact.job.title + ' - ' + contact.job.company);
        expect(enzymeWrapper.find('.email').text())
            .toEqual(contact.contact.email);
        expect(enzymeWrapper.find('.phone').text())
            .toEqual(contact.contact.phone);
        expect(enzymeWrapper.find('.street').text())
            .toEqual(contact.address.street);
        expect(enzymeWrapper.find('.city').text())
            .toEqual(contact.address.city);
        expect(enzymeWrapper.find('.zipCode').text())
            .toEqual(contact.address.zipCode);
    })

})

