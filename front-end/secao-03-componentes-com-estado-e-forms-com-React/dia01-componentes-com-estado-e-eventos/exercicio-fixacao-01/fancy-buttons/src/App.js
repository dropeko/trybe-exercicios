import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      clickNums: 0,
      clickNums2: 0,
      clickNums3: 0,
    }
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)

  }

  handleClickOne () {
    console.log('A vida é uma maravilha!!');
    this.setState((lastState, _props) => ({
      clickNums: lastState.clickNums + 1,
    }))
  }
  
  handleClickTwo () {
    console.log('Work Hard Play Hard!!');
    this.setState((lastState2, _props) => ({
      clickNums2: lastState2.clickNums2 + 1,
    }))
  }
  
  handleClickThree () {
    console.log('Você pode encontrar as coisas que perdeu, mas nunca as que abandonou!');
    this.setState((lastState3, _props) => ({
      clickNums3: lastState3.clickNums3 + 1,
    }))
  }
  
  render() {
    return <div className="App">
      <button onClick={ this.handleClickOne }>{ this.state.clickNums }</button>
      <button onClick={ this.handleClickTwo }>{ this.state.clickNums2 }</button>
      <button onClick={ this.handleClickThree }>{ this.state.clickNums3 }</button>
    </div>
    };
};

export default App;
