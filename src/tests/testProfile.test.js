import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const logoutData = 'profile-logout-btn';

describe('Testa se página de profile funciona corretamente', () => {
  test('Verifica se a página renderiza os elementos corretos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const email = screen.getByTestId('profile-email');
    const doneRecipes = screen.getByTestId('profile-done-btn');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId(logoutData);
    expect(email).toBeInTheDocument();
    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  test('Verifica se o botão Done Recipe funcionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const doneRecipes = screen.getByTestId('profile-done-btn');
    userEvent.click(doneRecipes);
    expect(history.location.pathname).toBe('/done-recipes');
  });
  test('Verifica se o botão Favorite Recipe funcionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });
  test('Verifica se o botão Logtout funcionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const logout = screen.getByTestId(logoutData);
    userEvent.click(logout);
    expect(history.location.pathname).toBe('/');
  });

  test('ao clicar no botao Logout, o local storage é esvaziado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const logout = screen.getByTestId(logoutData);
    userEvent.click(logout);
    expect(localStorage).toHaveLength(0);
  });
});
