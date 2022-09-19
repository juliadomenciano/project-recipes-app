import PropTypes, { object } from 'prop-types';
import React from 'react';
import { handleRemoveFavorite } from '../helpers/RecipeDetailHelpers';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButtonTrue(props) {
  const { data, foodOrDrink, setFavorite } = props;
  return (
    foodOrDrink === 'food' ? (
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => [handleRemoveFavorite(data.idMeal,
          foodOrDrink), setFavorite(false)] }
        className="button_like true"
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="Ícone do perfil" />
      </button>
    ) : (
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => [handleRemoveFavorite(data.idDrink,
          foodOrDrink), setFavorite(false)] }
        className="button_like true"
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="Ícone do perfil" />
      </button>
    ));
}

FavoriteButtonTrue.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;
