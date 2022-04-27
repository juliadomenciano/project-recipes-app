import React, { useState, useContext } from 'react';
import requestFoodApi from '../services/FoodApi';
import ProfileContext from '../context/ProfileContext/ProfileContext';

export default function SearchBar() {
  const [selectedFilter, setSelectedFilter] = useState();
  const [inputSearch, setInputSearch] = useState();
  const {
    foodOrDrink,
  } = useContext(ProfileContext);

  function onClick() {
    if (selectedFilter === 'First letter' && inputSearch.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      return requestFoodApi(foodOrDrink, selectedFilter, inputSearch);
    }
  }

  return (
    <form>
      <label htmlFor="searchInput">
        <input
          name="searchInput"
          type="text"
          data-testid="search-input"
          onChange={ ({ target }) => setInputSearch(target.value) }
        />
      </label>
      <fieldset>
        <label htmlFor="ingredient">
          <input
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            name="filterSelect"
            value="Ingredient"
            onChange={ ({ target }) => setSelectedFilter(target.value) }
          />
          Ingredient
        </label>
        <label htmlFor="name-search">
          <input
            id="name-search"
            type="radio"
            data-testid="name-search-radio"
            name="filterSelect"
            value="Name"
            onChange={ ({ target }) => setSelectedFilter(target.value) }
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            id="first-letter"
            type="radio"
            data-testid="first-letter-search-radio"
            name="filterSelect"
            value="First letter"
            onChange={ ({ target }) => setSelectedFilter(target.value) }
          />
          First letter
        </label>
      </fieldset>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => onClick() }
      >
        Search
      </button>
    </form>
  );
}
