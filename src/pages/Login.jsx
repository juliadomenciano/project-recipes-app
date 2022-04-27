import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../context/ProfileContext/ProfileContext';

function Login(props) {
  const {
    userEmail,
    setEmail,
    password,
    setPassword,
    disableButton,
  } = useContext(ProfileContext);

  function handleClick() {
    const userObject = { email: userEmail };
    const { history } = props;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(userObject));
    history.push('/foods');
  }

  console.log(disableButton);
  return (
    <form>
      <label htmlFor="email">
        E-mail
        <input
          id="email"
          type="email"
          name="email"
          placeholder="coloque seu melhor e-mail"
          data-testid="email-input"
          required="required"
          value={ userEmail }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          name="password"
          placeholder="coloque sua melhor senha"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disableButton }
        onClick={ () => handleClick() }
      >
        Enter
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
