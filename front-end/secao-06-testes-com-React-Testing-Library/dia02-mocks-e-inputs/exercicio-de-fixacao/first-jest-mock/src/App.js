// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: '',
    };
    
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
   }
   
   async fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };

    const request = await fetch(API_URL, REQUEST_CONFIG)
    const response = await request.json()

    console.log(response);

    this.setState({ joke: response.joke })
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <p>{joke}</p>
        <button type="button" onClick={ this.fetchJoke }>New joke</button>
      </div>
    );
  }
}

export default App;