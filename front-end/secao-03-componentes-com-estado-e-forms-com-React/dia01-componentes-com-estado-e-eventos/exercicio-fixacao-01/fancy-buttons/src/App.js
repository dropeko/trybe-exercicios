import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne () {
    console.log(this);
    console.log('A vida é uma maravilha!!');
  }
  
  handleClickTwo () {
    console.log(this);
    console.log('Work Hard Play Hard!!');
  }
  
  handleClickThree () {
    console.log(this);
    console.log('Você pode encontrar as coisas que perdeu, mas nunca as que abandonou!');
  }
  
  render() {
    return <div className="App">
      <button onClick={ this.handleClickOne }>Surprise Button 01</button>
      <button onClick={ this.handleClickTwo }>Surprise Button 02</button>
      <button onClick={ this.handleClickThree }>Surprise Button 03</button>
    </div>
    };
};

export default App;
