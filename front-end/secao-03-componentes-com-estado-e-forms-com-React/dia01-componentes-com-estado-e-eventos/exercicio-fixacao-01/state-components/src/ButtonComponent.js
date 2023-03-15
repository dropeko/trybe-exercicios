import React from "react";

class ButtonComponent extends React.Component {
  constructor() {
    super()

    this.click = this.click.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)

    this.state = {
      numClick01: 0,
      numClick02: 0,
      numClick03: 0,
    }
  }

  click() {
    this.setState((lastState, _props) => ({
      numClick01: lastState.numClick01 + 1
    }))
  }
  click2() {
    this.setState((lastState, _props) => ({
      numClick02: lastState.numClick02 + 1 
    }))
  }
  click3() {
    this.setState((lastState, _props) => ({
      numClick03: lastState.numClick03 + 1
    }))
  }
  render() {
    return (
      <>
        <button onClick={ this.click }>{ this.state.numClick01 }</button>
        <button onClick={ this.click2 }>{ this.state.numClick02 }</button>
        <button onClick={ this.click3 }>{ this.state.numClick03 }</button>
      </>
    )
  }
}

export default ButtonComponent;
