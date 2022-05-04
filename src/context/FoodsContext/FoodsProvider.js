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
  const [nationalities, setNationalities] = useState();
  const [nationalitiesCards, setNationalitiesCards] = useState();
  const [filter, setFilter] = useState({ option: 'all' });

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

  const handleChange = (e) => {
    // const { value } = target;
    setFilter({ option: e.target.value });
    console.log(filter);
  };

  const filterByNationality = async () => {
    const { option } = filter;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${option}`;
    if (option === 'all') {
      FoodsApiWithTwelve();
    } else {
      const request = await fetch(url);
      const data = await request.json();
      setNationalitiesCards(data.meals);
    }
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
    fetchNationalities();
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
    fetchNationalities,
    nationalities,
    handleChange,
    nationalitiesCards,
    ...filter,
    filterByNationality,
    FoodsApiWithTwelve,
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
