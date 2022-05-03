import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { drinkApi, drinkCategoryApi } from '../../services/drinkApi';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchDrinksResults, setSearchDrinksResults] = useState();
  const [drinksResults, setDrinksResults] = useState();
  const [drinksResultsRecover, setDrinksResultsRecover] = useState();
  const [recipeCategories, setRecipeCategories] = useState();
  const [ingredients, setIngredients] = useState();

  async function filterByCategory(category) {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    setDrinksResults(data);
  }

  const DrinksIngredients = async () => {
    const twelve = 12;
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await request.json();
    const arrWithTwelve = data.drinks.slice(0, twelve);
    setIngredients(arrWithTwelve);
  };

  useEffect(() => {
    const apiRequest = async () => {
      const data = await drinkApi();
      const dataCategorys = await drinkCategoryApi();
      setRecipeCategories(dataCategorys);
      setDrinksResults(data);
      setDrinksResultsRecover(data);
    };
    apiRequest();
  }, []);
  const contextValue = {
    searchDrinksResults,
    setSearchDrinksResults,
    drinksResults,
    setDrinksResults,
    recipeCategories,
    filterByCategory,
    drinksResultsRecover,
    DrinksIngredients,
    ingredients,
  };
  return (
    <DrinksContext.Provider value={ contextValue }>
      { children }
    </DrinksContext.Provider>

  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
