import React, { Component, PropTypes } from 'react';

class ContactDetails extends Component {
    render() {
        let contactDetails;
        if (this.props.selectedContact) {
             contactDetails = (
                <div className="selected-details">
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                            <img src={this.props.selectedContact.general.avatar} 
                            alt={this.props.selectedContact.general.firstName + this.props.selectedContact.general.lastName} 
                            className="img-responsive" />
                        </div>
                        <div className="selected-info col-sm-10 col-xs-12">
                            <h2 className="contact-name">{this.props.selectedContact.general.firstName} {this.props.selectedContact.general.lastName}</h2>
                            <h4 className="job-title">{this.props.selectedContact.job.title} - {this.props.selectedContact.job.company}</h4>
                            <div className="client-section">
                                <h4>Contact</h4>
                                <div className="row">
                                    <div className="col-sm-2">Email:</div>
                                    <div className="col-sm-10 email">{this.props.selectedContact.contact.email}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">Phone:</div>
                                    <div className="col-sm-10 phone">{this.props.selectedContact.contact.phone || "-"}</div>
                                </div>
                            </div>
                            <div className="client-section">
                                <h4>Address</h4>
                                <div className="row">
                                    <div className="col-sm-2">Street:</div>
                                    <div className="col-sm-10 street">{this.props.selectedContact.address.street || "-"}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">City:</div>
                                    <div className="col-sm-10 city">{this.props.selectedContact.address.city || "-"}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">Zipcode:</div>
                                    <div className="col-sm-10 zipCode">{this.props.selectedContact.address.zipCode || "-"}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">Country:</div>
                                    <div className="col-sm-10 country">{this.props.selectedContact.address.country || "-"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="wrapper">{contactDetails}</div>
        );
    }
}

ContactDetails.PropTypes = {
    selectedContact: PropTypes.object
}

export default ContactDetails;