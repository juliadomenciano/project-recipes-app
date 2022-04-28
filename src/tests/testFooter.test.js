import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

 const footerValidPaths = ['/foods', '/drinks', '/explore', '/explore/drinks',
 '/explore/foods', '/explore/foods/nationalities', '/explore/foods/ingredients',
 '/explore/drinks/ingredients', '/profile' ]
 const footerInvalidPaths = ['/', '/foods/{id-da-receita}', '/drinks/{id-da-receita}', '/foods/{id-da-receita}/in-progress',
 '/drinks/{id-da-receita}/in-progress', '/done-recipes', '/favorite-recipes' ]

describe('Testa o componente footer', () => {
  
  test('Em /foods, verifica se existem os elementos esperados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    const foodBtn = screen.getByTestId('food-bottom-btn');
    const footer = screen.getByTestId('footer');
    expect(history.location.pathname).toBe('/foods');
    expect(drinkBtn).toBeDefined();
    expect(exploreBtn).toBeDefined();
    expect(foodBtn).toBeDefined();
    expect(footer).toBeDefined();
  });

  test('Verifica se os links do footer fazem os redirecionamentos esperados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkBtn);
    expect(history.location.pathname).toBe('/drinks');
    const foodBtn = screen.getByTestId('food-bottom-btn');
    userEvent.click(foodBtn);
    expect(history.location.pathname).toBe('/foods');
    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    userEvent.click(exploreBtn);
    expect(history.location.pathname).toBe('/explore');
  });

  test('Verifica se o footer é renderizado nas rotas corretas', () => {
    footerValidPaths.forEach((path) => {
      cleanup();
      const { history } = renderWithRouter(<App />);
      history.push(path);
      expect(history.location.pathname).toBe(path);
      expect(screen.getByTestId('footer')).toBeDefined();
    })
  });

  test('Verifica se o footer não é renderizado nas rotas corretas', () => {
    footerInvalidPaths.forEach((path) => {
      cleanup();
      const { history } = renderWithRouter(<App />);
      history.push(path);
      expect(history.location.pathname).toBe(path);
      expect(screen.queryByTestId('footer')).toBeNull();
    })
  });

});
