import React from 'react';
import PropTypes, { object } from 'prop-types';
import RecipeCard from './RecipeCard';
import IngredientsList from './IngredientsList';

class RecipeDetailCard extends React.Component {
  render() {
    const { foodOrDrink, data } = this.props;
    const youtubeVideoId = foodOrDrink === 'drink' ? '' : data.strYoutube.replace('https://www.youtube.com/watch?v=', '');
    const image = foodOrDrink === 'food' ? data.strMealThumb : data.strDrinkThumb;
    const title = foodOrDrink === 'food' ? data.strMeal : data.strDrink;
    const category = foodOrDrink === 'food' ? data.strCategory : data.strAlcoholic;
    const instructions = data.strInstructions;
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ image }
          alt={ `imagem da receita ${title}` }
        />
        <h1 data-testid="recipe-title">{ title }</h1>
        <button
          type="button"
          data-testid="share-btn"
          onChange={ () => console.log('chatabum') }
        >
          compartilhar
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onChange={ () => console.log('chatabum') }
        >
          favoritar
        </button>
        <p data-testid="recipe-category">{ category }</p>
        <IngredientsList data={ data } />
        <p data-testid="instructions">{ instructions }</p>
        { foodOrDrink === 'food' && (
          <iframe
            title={ title }
            data-testid="video"
            width="420"
            height="315"
            src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
          />
        )}
        <RecipeCard data-testid="0-recomendation-card" />
        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar receita
        </button>
      </div>
    );
  }
}

RecipeDetailCard.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;

export default RecipeDetailCard;
