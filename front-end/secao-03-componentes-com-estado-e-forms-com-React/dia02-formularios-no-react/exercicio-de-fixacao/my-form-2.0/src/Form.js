import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleFullName = this.handleFullName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    
    this.state = {
      nomeCompleto: '',
      idade: 0,
      textArea: ''
    }
  }

  handleFullName(event) {
    this.setState(() => ({
      nomeCompleto: event.target.value
    }))
  }

  handleAge(event) {
    this.setState(() => ({
      idade: event.target.value
    }))
  }

  handleTextArea(event) {
    this.setState(() => ({
      textArea: event.target.value
    }))
  }

  render() {
    return (
      <>
        <h1>Meu Form em React</h1>
        <form>
          <label>
            Nome completo:
            <input type="text" 
              value={ this.state.nomeCompleto } 
              onChange={ this.handleFullName }
            >
            </input>
          </label>
          <label>
            Idade:
            <input type="number"
              value={ this.state.idade}
              onChange={ this.handleAge }
            >
            </input>
          </label>
          <label> 
            Fale sobre você:
            <textarea
              value={ this.state.textArea }
              onChange={ this.handleTextArea }
            >
            </textarea>
          </label>
        </form>
      </>
    )
  }
}

export default Form;
