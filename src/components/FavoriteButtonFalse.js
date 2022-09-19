import PropTypes, { object } from 'prop-types';
import React from 'react';
import { handleFavoriteRecipe } from '../helpers/RecipeDetailHelpers';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButtonFalse(props) {
  const { data, foodOrDrink, setFavorite } = props;
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => [handleFavoriteRecipe(data, foodOrDrink),
        setFavorite(true)] }
      className="button_like false"
      src={ whiteHeartIcon }
    >
      <img src={ whiteHeartIcon } alt="Ícone do perfil" />
    </button>
  );
}

FavoriteButtonFalse.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
  favorite: PropTypes.bool,
  setFavorite: PropTypes.func,
}.isRequired;
