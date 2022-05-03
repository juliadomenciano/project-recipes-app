/* import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { foodApi, foodCategory } from '../../services/foodApi';
import NationalitiesProvider from './FoodsContext';

function NationalitiesProvider({ children }) {
  const [nationalities, setNationalities] = useState();

  const foodIngredients = async () => {
    const twelve = 12;
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await request.json();
    const arrWithTwelve = data.meals.slice(0, twelve);
    setIngredients(arrWithTwelve);
  };

  const fetchNationalities = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await request.json();
    const arr = data.meals;
    setNationalities(arr);
  };

  const FoodsApiWithTwelve = async () => {
    const twelve = 12;
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await request.json();
    const arrWithTwelve = data.meals.slice(0, twelve);
    setNationalitiesCards(arrWithTwelve);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchNationalities(); FoodsApiWithTwelve(); }, []);

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
    fetchNationalities,
    nationalities,
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

export default NationalitiesProvider;
 */
