import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

class Contact extends Component {
    selectContact(contact) {
        this.props.onSelectContact(contact);
    }
    render() {
        let itemClass = classNames(
            'client',
            'row',
            {
                'selected': this.props.contact === this.props.selectedContact
            }
        );
        return (
            <li className={itemClass} onClick={this.selectContact.bind(this, this.props.contact)}>
              <div className="col-xs-4">
                <img src={this.props.contact.general.avatar} alt="" className="img-responsive img-circle" />
              </div>
              <div className="col-xs-8">
                  <h4 className="contact-name">
                      {this.props.contact.general.firstName} {this.props.contact.general.lastName}
                  </h4>
                  <div className="job-title small text-muted">{this.props.contact.job.title}</div>
              </div>
            </li>
        );
    }
}

Contact.propTypes ={
    contact: PropTypes.object.isRequired,
    selectedContact: PropTypes.object,
    onSelectContact: PropTypes.func.isRequired
}

export default Contact;
