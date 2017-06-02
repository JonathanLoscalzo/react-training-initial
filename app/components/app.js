import React, { Component } from 'react';
import Popular from './popular';
import Badge from './Badge/badge';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <h1>Hello React Training!</h1>
                <hr />
            </div>
        )
    }
}

class AppFooter extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <AppHeader />
                <div className='container'>
                    <Popular />
                </div>
                <AppFooter />
            </div>
        )
    }
}