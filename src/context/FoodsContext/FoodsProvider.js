import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { foodApi, foodCategory } from '../../services/foodApi';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  const [searchFoodsResults, setSearchFoodsResults] = useState();
  const [foodsResults, setFoodsResults] = useState();
  const [foodsResultsRecover, setFoodsResultsRecover] = useState();
  const [recipeCategories, setFoodsCategories] = useState();
  const [ingredients, setIngredients] = useState();

  async function filterByCategory(category) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await request.json();
    setFoodsResults(data);
  }

  const foodIngredients = async () => {
    const twelve = 12;
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await request.json();
    const arrWithTwelve = data.meals.slice(0, twelve);
    setIngredients(arrWithTwelve);
  };

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
    foodIngredients,
    ingredients,
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
