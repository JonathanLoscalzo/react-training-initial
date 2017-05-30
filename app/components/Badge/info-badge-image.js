import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoBadgeImage extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Username: {this.props.username}</h2>
            </div>
        )
    }
}