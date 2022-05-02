import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const foodsUrl = '/explore/foods';
const drinksUrl = '/explore/drinks';
const surpriseUrl = 'explore-surprise';
const ingredienteUrl = 'explore-by-ingredient';

describe('Testa as páginas Explore Foods e Explore Drinks', () => {
  test('Verifica se existem os botõoes esperados na tela Explore Foods', () => {
    const { history } = renderWithRouter(<App />);
    history.push(foodsUrl);
    const byIngridient = screen.getByTestId(ingredienteUrl);
    const byNationality = screen.getByTestId('explore-by-nationality');
    const surprise = screen.getByTestId(surpriseUrl);
    expect(byIngridient).toBeInTheDocument();
    expect(byNationality).toBeInTheDocument();
    expect(surprise).toBeInTheDocument();
  });

  test('Verifica se existem os botõoes esperados na tela Explore Drinks', () => {
    const { history } = renderWithRouter(<App />);
    history.push(drinksUrl);
    const byIngridient = screen.getByTestId(ingredienteUrl);
    const surprise = screen.getByTestId(surpriseUrl);
    expect(byIngridient).toBeInTheDocument();
    expect(surprise).toBeInTheDocument();
  });

  test('Verifica botões da tela Explore Foods redirecionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(foodsUrl);
    const byIngridient = screen.getByTestId(ingredienteUrl);
    userEvent.click(byIngridient);
    expect(history.location.pathname).toBe('/explore/foods/ingredients');
  });

  test('Verifica botões da tela Explore Foods redirecionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(foodsUrl);
    const byNationality = screen.getByTestId('explore-by-nationality');
    userEvent.click(byNationality);
    expect(history.location.pathname).toBe('/explore/foods/nationalities');
  });
  /*
  test('Verifica botões da tela Explore Foods redirecionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(foodsUrl);
    const surprise = screen.getByTestId(surpriseUrl);
    userEvent.click(surprise);
    expect(history.location.pathname).toBe('/foods/');
  }); */

  test('Verifica botões da tela Explore Drinks redirecionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(drinksUrl);
    const byIngridient = screen.getByTestId(ingredienteUrl);
    userEvent.click(byIngridient);
    expect(history.location.pathname).toBe('/explore/drinks/ingredients');
  });
/*
  test('Verifica botões da tela Explore Drinks redirecionam corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push(drinksUrl);
    const surprise = screen.getByTestId(surpriseUrl);
    userEvent.click(surprise);
    expect(history.location.pathname).toBe('/drinks/');
  }); */
});
