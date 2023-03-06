import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)


    this.state = {
      nomeCompleto: '',
      idade: '',
      favHobbie: '',
      turno: '',
      feira: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <>
        <h1>Meu primeiro Formulário em React</h1>
        <form>
          <label>
            Nome Completo:
            <input type="text" name="nomeCompleto" onChange={ this.handleChange } value={ this.state.nomeCompleto }></input>
          </label>
          <hr></hr>
          <label>
            Idade:
            <input type="string" name="idade" onChange={ this.handleChange } value={ this.state.idade }></input>
          </label>
          <hr></hr>
          <label>
            Diga qual seu hobbie favorito:
            <textarea name="favHobbie" onChange={ this.handleChange } value={ this.state.favHobbie}></textarea>
          </label>
          <hr></hr>
          <label>
            Diurno/Noturno:
            <select name="turno" value={ this.state.turno } onChange={ this.handleChange }>
              <option value="diurno">Diurno</option>
              <option value="noturno">Noturno</option>
            </select>
          </label>
          <hr></hr>
          <label>
            Vai a feira amanhã?:
            <input type='checkbox' name="feira" onClick={ this.handleChange } value={ this.state.feira }></input>
          </label>
        </form>
      </>
    )
  }
}

export default Form;