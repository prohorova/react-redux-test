import React, { Component, PropTypes } from 'react';

class Search extends Component {
    handleChange(event) {
        let searchString = event.target.value.trim();
        this.props.onSearchChange(searchString);
    }
    render() {
        return (
            <div className="search-box">
                <input type="text" className="form-control" placeholder="Search..."
                       ref="searchString" onChange={this.handleChange.bind(this)}/>
                <i className="glyphicon glyphicon-search"></i>
            </div>
        );
    }
}

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired
}

export default Search;