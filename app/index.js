import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge/badge'
import './index.css';

const myAvatar = "https://avatars0.githubusercontent.com/u/6944598?v=3&u=3ad8dbf6e5e8495a3790bd60150c168df6f9a40c&s=400";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React Training!</h1>
        <hr />
        <Badge
          img={myAvatar}
          name="Nombre"
          username="username" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));