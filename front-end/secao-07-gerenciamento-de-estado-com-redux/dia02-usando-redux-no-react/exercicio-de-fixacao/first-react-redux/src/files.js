import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

const validateLenght = 6;

class Login extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
    this.checkEmailValidation = this.checkEmailValidation.bind(this);

    this.state = {
      password: '',
      email: '',
    };
  }

  handleClickChange() {
    const { dispatch,
      history,
    } = this.props;
    const { email } = this.state;

    dispatch(addEmail(email));

    history.push('/carteira');
  }

  handleInputChange({ target }) {
    const { name,
      value,
    } = target;

    this.setState(
      {
        [name]: value,
      },
    );
  }

  checkEmailValidation(email) {
    const testRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return testRegexEmail.test(email);
  }

  render() {
    const { password,
      email } = this.state;

    return (
      <div className="main-div-login">
        <form>
          <h2>Login</h2>
          <input
            value={ email }
            data-testid="email-input"
            onChange={ this.handleInputChange }
            name="email"
            type="email"
          />
          <input
            value={ password }
            data-testid="password-input"
            onChange={ this.handleInputChange }
            name="password"
            type="password"
          />
          <button
            disabled={ !(this.checkEmailValidation(email)
              && password.length >= validateLenght) }
            onClick={ () => this.handleClickChange() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
