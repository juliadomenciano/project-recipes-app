import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const loginSubimitButton = 'login-submit-btn';
const emailInput = 'email-input';
const passwordInput = 'password-input';
const emailInputTest = 'pessoa@email.com';

describe('Testa se página de login renderiza na rota /', () => {
  test('A pagina de login deve possuir dois inputs, email e senha', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
  test('Verifica se e possivel escrever no input de email e de senha', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    userEvent.type(inputEmail, emailInputTest);
    userEvent.type(inputPassword, '1234567');
  });
  test('A pagina de login deve possuir um botao Enter', () => {
    renderWithRouter(<App />);
    const enterButton = screen.getByTestId(loginSubimitButton);
    expect(enterButton).toBeInTheDocument();
  });
  test('Ao clicar no botao o usuario deve ser redirecionado para a rota /foods', () => {
    const { history } = renderWithRouter(<App />);
    const enterButton = screen.getByTestId(loginSubimitButton);
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    userEvent.type(inputEmail, emailInputTest);
    userEvent.type(inputPassword, '1234567');
    userEvent.click(enterButton);
    expect(history.location.pathname).toBe('/foods');
  });
  test(`ao clicar no botao, o email do usuario e os 
  tokens meal e cocktail devem estar salvos no local storage`, () => {
    renderWithRouter(<App />);
    const enterButton = screen.getByTestId(loginSubimitButton);
    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    userEvent.type(inputEmail, emailInputTest);
    userEvent.type(inputPassword, '1234567');
    userEvent.click(enterButton);
    const email = localStorage.getItem('user');
    const meal = localStorage.getItem('mealsToken');
    const cocktail = localStorage.getItem('cocktailsToken');
    expect(email).not.toBe(undefined);
    expect(meal).not.toBe(undefined);
    expect(cocktail).not.toBe(undefined);
  });
});
