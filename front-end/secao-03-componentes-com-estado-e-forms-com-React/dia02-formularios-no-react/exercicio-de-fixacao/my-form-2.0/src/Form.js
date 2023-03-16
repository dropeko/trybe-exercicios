import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      nomeCompleto: '',
      idade: 0,
      textArea: '',
      checkbox: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
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
              onChange={ this.handleChange }
              name="nomeCompleto"
            >
            </input>
          </label>
          <label>
            Idade:
            <input type="number"
              value={ this.state.idade}
              onChange={ this.handleChange }
              name="idade"
            >
            </input>
          </label>
          <label> 
            Fale sobre você:
            <textarea
              value={ this.state.textArea }
              onChange={ this.handleChange }
              name="textArea"
            >
            </textarea>
          </label>
          <label>
            Você está aprendendo?:
            <input 
              type="checkbox" 
              name="checkbox"
              onClick={ this.handleChange }
            >
            </input>
          </label>
        </form>
      </>
    )
  }
}

export default Form;
