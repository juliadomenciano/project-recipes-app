import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../context/ProfileContext/ProfileContext';

import '../CSS/login_page.css';

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

  return (
    <div className="container_login">
      <div className="container_login_image">
        <p>imagem de destaque aqui</p>
      </div>
      <dir className="container_app_title">
        <h1 className="app_title">
          easy
          <strong>cooking</strong>
        </h1>
        <p className="subtitle">the best recipe app</p>
      </dir>
      <form className="container_login_form">
        <label
          htmlFor="email"
          className="container_email"
        >
          <input
            id="email"
            type="email"
            name="email"
            className="input_email"
            // placeholder="coloque seu melhor e-mail"
            data-testid="email-input"
            required="required"
            value={ userEmail }
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <span className="input_login">E-mail</span>
        </label>
        <label
          htmlFor="password"
          className="container_password"
        >
          <input
            id="password"
            type="password"
            name="password"
            className="input_password"
            // placeholder="coloque sua melhor senha"
            data-testid="password-input"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            required
            // importante colocar o campo com required para a animação do span funcionar
          />
          <span className="input_login">Senha</span>
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disableButton }
          onClick={ () => handleClick() }
          className="login_app_button"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
