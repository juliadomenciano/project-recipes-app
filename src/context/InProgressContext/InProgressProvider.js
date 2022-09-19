import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InProgressContext from './InProgressContext';

const FAVORITE_KEY = 'favoriteRecipes';
const ALCOHOLIC_KEY = 'strAlcoholic';

export default function InProgressProvider({ children }) {
  const [recipeData, setRecipeData] = useState({});
  const [scribbled, setScribbled] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const { type: { name } } = children;
    const id = name.includes('Food') ? 'idMeal' : 'idDrink';
    const favoriteStorage = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    const updateFavorite = {
      id: recipeData[id],
      type: id !== 'idMeal' ? 'drink' : 'food',
      nationality: id !== 'idMeal' ? '' : recipeData.strArea,
      category: recipeData.strCategory,
      alcoholicOrNot: recipeData[ALCOHOLIC_KEY] || '',
      name: id !== 'idMeal' ? recipeData.strDrink : recipeData.strMeal,
      image: id !== 'idMeal' ? recipeData.strDrinkThumb : recipeData.strMealThumb,
    };
    if (favoriteStorage.some((fav) => fav.id === recipeData[id])) {
      const filteredFavorites = favoriteStorage
        .filter((fav) => fav.id !== recipeData[id]);
      setIsFavorite(false);
      return localStorage
        .setItem(FAVORITE_KEY, JSON.stringify(filteredFavorites || []));
    } setIsFavorite(true);
    localStorage
      .setItem(FAVORITE_KEY, JSON.stringify([...favoriteStorage, updateFavorite]));
  };

  const contextValue = {
    scribbled,
    setScribbled,
    isFavorite,
    setIsFavorite,
    recipeData,
    setRecipeData,
    handleFavorite,
  };

  return (
    <InProgressContext.Provider value={ contextValue }>
      { children }
    </InProgressContext.Provider>
  );
}

InProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
