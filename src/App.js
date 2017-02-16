import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactDetails from './components/ContactDetails';
import Contacts from './components/Contacts';
import Search from './components/Search';
import AppActionCreators from './actions/AppActionCreators';
import * as utils from './utils/utils';

export class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  onSearchChange(searchString) {
    this.props.searchContacts(searchString);
  }
  onSelectContact(contact) {
    this.props.selectContact(contact);
  }
  render() {
    let errorMessage = this.props.errorMessage ? 
      <div className="alert alert-danger">{this.props.errorMessage}</div> : '';
    return (
      <div>
        
        <div className="content">
          {errorMessage}
          <ContactDetails selectedContact={this.props.selectedContact}/>
        </div>
        
        <div className="sidenav">
          <Search onSearchChange={this.onSearchChange.bind(this)}/>

          <Contacts contacts={this.props.contacts} 
            selectedContact={this.props.selectedContact} 
            onSelectContact={this.onSelectContact.bind(this)}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  selectedContact: PropTypes.object,
  errorMessage: PropTypes.string
}

const mapStateToProps = (state) => ({
    contacts: utils.searchForContacts(state.contacts, state.searchRequest),
    selectedContact: state.selectedContact,
    errorMessage: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(AppActionCreators.fetchContacts()),
  searchContacts: (searchRequest) => dispatch(AppActionCreators.searchContacts(searchRequest)),
  selectContact: (contact) => dispatch(AppActionCreators.selectContact(contact))
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
