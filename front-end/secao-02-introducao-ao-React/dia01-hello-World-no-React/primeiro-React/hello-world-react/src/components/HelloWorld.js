import React from "react";
import logo from './logo.svg';
import './App.css';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Hello, World!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    )
  }
}

export default HelloWorld;