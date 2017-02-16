import React, { Component, PropTypes } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    render() {
        let contacts = this.props.contacts.map((contact, index) => {
            return <Contact key={index} contact={contact} 
                selectedContact={this.props.selectedContact} 
                onSelectContact={this.props.onSelectContact}/>
        });
        return (
            <div className="contact-list">
                <ul className="clients">
                    {contacts}
                </ul>
            </div>
        );
    }
}

Contacts.PropTypes = {
    contacts: PropTypes.array.isRequired,
    selectedContact: PropTypes.object,
    onSelectContact: PropTypes.func.isRequired
}

export default Contacts;