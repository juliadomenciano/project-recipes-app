import PropTypes, { object } from 'prop-types';
import React from 'react';
import { handleStartRecipe } from '../helpers/RecipeDetailHelpers';
// import CSS from '../modules/RecipeCard.module.css';
import '../CSS/status_recipe.css';

export default function StartRecipeButton(props) {
  const { foodOrDrink, data, ingredients, history, setInProgress } = props;
  return (
    foodOrDrink === 'food' ? (
      <button
        // className={ CSS.start_recipe }
        className="status_recipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => [handleStartRecipe(foodOrDrink,
          data.idMeal, ingredients, history),
        setInProgress(true)] }
      >
        Iniciar receita
      </button>
    ) : (
      <button
        // className={ CSS.start_recipe }
        className="status_recipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => [handleStartRecipe(foodOrDrink,
          data.idDrink, ingredients, history),
        setInProgress(true)] }
      >
        Iniciar receita
      </button>
    )
  );
}

StartRecipeButton.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;
