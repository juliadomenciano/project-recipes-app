import React, { useContext } from 'react';
import ProfileContext from '../context/ProfileContext/ProfileContext';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    disableButton,
  } = useContext(ProfileContext);

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
          value={ email }
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
        type="submit"
        data-testid="login-submit-btn"
        disabled={ disableButton }
        onClick={ handleClick }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
