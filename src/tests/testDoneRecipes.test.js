import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import doneRecipes from './data.test';

const filterAll = 'filter-by-all-btn';
const filterByFood = 'filter-by-food-btn';
const filterByDrink = 'filter-by-drink-btn';
const doneRecipesPath = '/done-recipes';
const foodText = 'Spicy Arrabiata Penne';
const four = 4;

beforeAll(() => {
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
});

describe('Testa a tela de receitas feitas', () => {
  test('Na tela, verifica se todos os filtros são renderizados', () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPath);
    const buttonAll = screen.getByTestId(filterAll);
    const buttonFood = screen.getByTestId(filterByFood);
    const buttonDrink = screen.getByTestId(filterByDrink);
    const buttonsRenderized = screen.getAllByRole('button');

    expect(buttonsRenderized).toHaveLength(four);
    expect(buttonAll).toBeInTheDocument();
    expect(buttonFood).toBeInTheDocument();
    expect(buttonDrink).toBeInTheDocument();
  });

  test('Testa se as receitas prontas são mostradas como devido', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPath);

    const foodImg = await screen.findByTestId('0-horizontal-image');
    const foodCatAndNat = await screen.findByTestId('0-horizontal-top-text');
    const foodName = await screen.findByTestId('0-horizontal-name');
    const foodDate = await screen.findByTestId('0-horizontal-done-date');
    const foodFirstTag = await screen.findByTestId('0-Pasta-horizontal-tag');
    const foodSecondTag = await screen.findByTestId('0-Curry-horizontal-tag');

    const drinkImg = await screen.findByTestId('1-horizontal-image');
    const drinkName = await screen.findByTestId('1-horizontal-name');
    const drinkDate = await screen.findByTestId('1-horizontal-done-date');
    const drinkAlcoholic = await screen.findByTestId('1-horizontal-top-text');
    const shareBtn = await screen.findByTestId('1-horizontal-share-btn');

    expect(foodImg).toBeInTheDocument();
    expect(foodCatAndNat).toBeInTheDocument();
    expect(foodName).toBeInTheDocument();
    expect(foodDate).toBeInTheDocument();
    expect(foodFirstTag).toBeInTheDocument();
    expect(foodSecondTag).toBeInTheDocument();

    expect(drinkImg).toBeInTheDocument();
    expect(drinkName).toBeInTheDocument();
    expect(drinkDate).toBeInTheDocument();
    expect(drinkAlcoholic).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
  });

  test('Testa se o filtro por comida funciona como esperado', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPath);
    const buttonFood = screen.getByTestId(filterByFood);
    userEvent.click(buttonFood);

    const foodName = await screen.findByText(foodText);
    expect(foodName).toBeInTheDocument();

    const drinkName = await screen.queryByTestId('1-horizontal-name');
    expect(drinkName).not.toBeInTheDocument();
  });

  test('Testa se o filtro por bebida funciona como esperado', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPath);
    const buttonDrink = screen.getByTestId(filterByDrink);
    userEvent.click(buttonDrink);

    const foodName = await screen.queryByText(foodText);
    expect(foodName).not.toBeInTheDocument();

    const drinkName = await screen.findByText('Aquamarine');
    expect(drinkName).toBeInTheDocument();
  });

  test.only('Testa se o filtro "all" funciona como esperado', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(doneRecipesPath);
    const buttonAll = screen.getByTestId(filterAll);
    userEvent.click(buttonAll);

    const foodName = await screen.findByText(foodText);
    expect(foodName).toBeInTheDocument();

    const drinkName = await screen.findByText('Aquamarine');
    expect(drinkName).toBeInTheDocument();
  });
});
