import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';
import { drinkApi, drinkCategoryApi } from '../../services/drinkApi';

function DrinksProvider({ children }) {
  const [searchDrinksResults, setSearchDrinksResults] = useState();
  const [drinksResults, setDrinksResults] = useState();
  const [recipeCategories, setRecipeCategories] = useState();

  async function filterByCategory(category) {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');
    setDrinksResults(data);
  }

  useEffect(() => {
    const apiRequest = async () => {
      const data = await drinkApi();
      const dataCategorys = await drinkCategoryApi();
      setRecipeCategories(dataCategorys);
      setDrinksResults(data);
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
