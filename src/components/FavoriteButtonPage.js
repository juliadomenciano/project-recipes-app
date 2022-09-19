import PropTypes from 'prop-types';
import React from 'react';
import { handleRemoveFavorite } from '../helpers/RecipeDetailHelpers';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButtonPage(props) {
  const { data, foodOrDrink, setFavorite, index } = props;
  return (
    foodOrDrink === 'food' ? (
      <button
        data-testid={ `${index}-horizontal-favorite-btn` }
        type="button"
        onClick={ () => [handleRemoveFavorite(data,
          foodOrDrink), setFavorite(false)] }
        // className="button_like true"
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="Ícone do perfil" />
      </button>
    ) : (
      <button
        type="button"
        data-testid={ `${index}-horizontal-favorite-btn` }
        onClick={ () => [handleRemoveFavorite(data,
          foodOrDrink), setFavorite(false)] }
        // className="button_like true"
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="Ícone do perfil" />
      </button>
    ));
}

FavoriteButtonPage.propTypes = {
  data: PropTypes.string,
  foodOrDrink: PropTypes.string,
}.isRequired;
