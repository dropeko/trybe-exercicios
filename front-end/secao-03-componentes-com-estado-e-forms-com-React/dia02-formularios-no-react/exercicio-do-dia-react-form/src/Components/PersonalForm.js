import React from "react";

class PersonalForm extends React.Component {
  render() {
    const { name, email, cpf, handleChange } = this.props

    return (
      <fieldset>
      <legend>Dados pessoais</legend>
      <label>
        Nome
        <input 
          name="name"
          type="text" 
          maxLength="40"
          value={ name }
          onChange= { handleChange }
        />
      </label>
      <label>
        Email
        <input 
          name="email"
          type="email" 
          maxLength="50"
          required
          value={ email }
          onChange= { handleChange }
        />
      </label>
      <label>
        CPF
        <input 
          name="cpf"
          type="text"
          maxLength="11"
          required
          value={ cpf }
          onChange= { handleChange }
        />
      </label>
    </fieldset>
    )
  }
}

export default PersonalForm;