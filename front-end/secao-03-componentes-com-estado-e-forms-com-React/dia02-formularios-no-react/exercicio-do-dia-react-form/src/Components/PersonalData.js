import React from "react";

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset>
      <legend>Dados pessoais</legend>
      <label>
        Nome:
        <input 
          id="name"
          type="text" 
          maxLength="40"
          required
        />
      </label>
      <label>
        Email:
        <input 
          id="email"
          type="email" 
          maxLength="50"
          required
        />
      </label>
      <label>
        CPF:
        <input 
          id="cpf"
          type="text"
          maxLength="11"
          required
        />
      </label>
    </fieldset>
    )
  }
}

export default PersonalData;