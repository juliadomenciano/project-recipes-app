import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from './FoodsContext';
import { foodApi, foodCategory } from '../../services/foodApi';

function FoodsProvider({ children }) {
  const [searchFoodsResults, setSearchFoodsResults] = useState();
  const [foodsResults, setFoodsResults] = useState();
  const [foodsResultsRecover, setFoodsResultsRecover] = useState();
  const [recipeCategories, setFoodsCategories] = useState();

  async function filterByCategory(category) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await request.json();
    setFoodsResults(data);
  }

  useEffect(() => {
    const apiRequest = async () => {
      const data = await foodApi();
      const dataCategories = await foodCategory();
      setFoodsResults(data);
      setFoodsResultsRecover(data);
      setFoodsCategories(dataCategories);
    };
    apiRequest();
  }, []);

  const contextValue = {
    searchFoodsResults,
    foodsResults,
    setSearchFoodsResults,
    recipeCategories,
    filterByCategory,
    foodsResultsRecover,
    setFoodsResults,
  };
  return (
    <FoodsContext.Provider value={ contextValue }>
      { children }
    </FoodsContext.Provider>

  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
