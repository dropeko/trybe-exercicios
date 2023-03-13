import React from "react";

class ButtonComponent extends React.Component {
  click() {
    console.log('Clicou no botão 01');
  }
  click2() {
    console.log('Clicou no botão 02');
  }
  click3() {
    console.log('Clicou no botão 03');
  }
  render() {
    return (
      <>
        <button onClick={ this.click }>Console Log Button 01</button>
        <button onClick={ this.click2 }>Console Log Button 02</button>
        <button onClick={ this.click3 }>Console Log Button 03</button>
      </>
    )
  }
}

export default ButtonComponent;
