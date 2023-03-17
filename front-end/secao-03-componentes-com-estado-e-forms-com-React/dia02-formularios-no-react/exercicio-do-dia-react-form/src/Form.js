import React from "react";
import PersonalData from "./Components/PersonalData";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: ''
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = ( target.type === 'checkbox' ? target.checked : target.value )
    
    this.setState(() => ({
      [name]: value
    }))

  }

  render() {
    return (
      <form>
        <PersonalData />
      </form>
    )
  }
}

export default Form;