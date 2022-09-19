import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const foodsIngredients = '/explore/foods/ingredients';
const twelve = 12;

describe('Testa a página Explore Ingredients', () => {
  test('Verifica se existem os elementos esperados', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(foodsIngredients);

    for (let index = 0; index < twelve; index += 1) {
      const IngridientCard = screen
        .getByTestId(`${index}-ingredient-card`);
      const IngridientImg = screen.getByTestId(`${index}-card-img`);
      const IngridientName = screen.getByTestId(`${index}-card-name`);
      expect(IngridientCard).toBeInTheDocument();
      expect(IngridientImg).toBeInTheDocument();
      expect(IngridientName).toBeInTheDocument();
    }
  });
});
