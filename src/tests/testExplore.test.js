import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa a página explore', () => {
  test('Verifica se existem os botõoes esperados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore');
    const drinkBtn = screen.getByTestId('explore-drinks');
    const foodBtn = screen.getByTestId('explore-foods');
    expect(drinkBtn).toBeInTheDocument();
    expect(foodBtn).toBeInTheDocument();
  });

  test('Verifica botões fazem os redirecionamentos esperados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore');
    const drinkBtn = screen.getByTestId('explore-drinks');
    userEvent.click(drinkBtn);
    expect(history.location.pathname).toBe('/explore/drinks');
    history.push('/explore');
    const foodBtn = screen.getByTestId('explore-foods');
    userEvent.click(foodBtn);
    expect(history.location.pathname).toBe('/explore/foods');
  });
});
