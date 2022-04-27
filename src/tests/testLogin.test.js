import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa se página de login renderiza na rota /', () => {
  test('A pagina de login deve possuir dois inputs, email e senha', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
  test('A pagina de login deve possuir um botao Enter', () => {
    renderWithRouter(<App />);
    const enterButton = screen.getByTestId('login-submit-btn');

    expect(enterButton).toBeInTheDocument();
  });
  test('Verifica se e possivel escrever no input de email e de senha', () => {
    renderWithRouter(<App />);
    // const inputEmail = screen.getByTestId('email-input');
    // const inputPassword = screen.getByTestId('password-input');

    // userEvent.type(inputEmail, 'pessoa@email.com');
    // userEvent.type(inputPassword, '123456');
  });
});
