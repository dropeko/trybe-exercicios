import React from "react";
import PersonalForm from "./Components/PersonalForm";
import AddressForm from "./Components/AddressForm";
import handleValue from "./utils/handleValue";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: 'Acre',
      addressType: 'Casa',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let newValue = handleValue(name, value);

    if (name === 'name') {
      newValue = value.toUpperCase();
    }
  
    this.setState({
      [name]: newValue,
    });
  }

  handleBlur({ target }) {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  render() {
    return (
      <form>
        <PersonalForm
        handleChange={ this.handleChange } 
        name={ this.state.name } 
        email={ this.state.email } 
        cpf={ this.state.cpf }
        />
        <AddressForm 
        onChange={ this.handleChange }
        onBlur={ this.handleBlur } 
        formState={ this.state } 
        />
      </form>
    )
  }
}

export default Form;