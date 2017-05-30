import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoBadgeImage from './info-badge-image';

export default class Badge extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.img}
                    alt="avatar"
                    style={
                        {
                            height: 100,
                            width: 100
                        }
                    } />
                <InfoBadgeImage name={this.props.name} username={this.props.username} />
            </div>
        );
    }
}
