import PropTypes, { object } from 'prop-types';
import React from 'react';
import { handleContinueRecipe } from '../helpers/RecipeDetailHelpers';
// import CSS from '../modules/RecipeCard.module.css';
import '../CSS/status_recipe.css';

export default function ContinueRecipeButton(props) {
  const { foodOrDrink, data, history } = props;
  return (
    <button
      // className={ CSS.start_recipe }
      className="status_recipe"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ () => handleContinueRecipe(foodOrDrink, data.idMeal, history) }
    >
      Continue Recipe
    </button>
  );
}

ContinueRecipeButton.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;
