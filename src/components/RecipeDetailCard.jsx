import PropTypes, { object } from 'prop-types';
import React, { useContext } from 'react';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import IngredientsList from './IngredientsList';
import RecipeCard from './RecipeCard';

function RecipeDetailCard(props) {
  const { foodOrDrink, data } = props;
  const { foodsResults } = useContext(FoodsContext);
  const { drinksResults } = useContext(DrinksContext);
  const results = foodsResults ? foodsResults.meals : foodsResults;
  const resultsDrinks = drinksResults ? drinksResults.drinks : drinksResults;
  const youtubeVideoId = foodOrDrink === 'drink' ? '' : data.strYoutube.replace('https://www.youtube.com/watch?v=', '');
  const image = foodOrDrink === 'food' ? data.strMealThumb : data.strDrinkThumb;
  const title = foodOrDrink === 'food' ? data.strMeal : data.strDrink;
  const category = foodOrDrink === 'food' ? data.strCategory : data.strAlcoholic;
  const instructions = data.strInstructions;
  const magicNumber = 6;
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt={ `imagem da receita ${title}` }
      />
      <h1 data-testid="recipe-title">{title}</h1>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => console.log(foodsResults) }
      >
        compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => console.log(drinksResults) }
      >
        favoritar
      </button>
      <p data-testid="recipe-category">{category}</p>
      <IngredientsList foodOrDrink={ foodOrDrink } data={ data } />
      <p data-testid="instructions">{instructions}</p>
      {foodOrDrink === 'food' && (
        <iframe
          title={ title }
          data-testid="video"
          width="420"
          height="315"
          src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
        />
      )}
      {
        results && (
          foodOrDrink === 'food' ? (
            results.map((meal, index) => (index < magicNumber && (
              <div data-testid={ `${index}-recomendation-card` }>
                <RecipeCard
                  key={ index }
                  name={ meal.strMeal }
                  image={ meal.strMealThumb }
                  index={ index }
                />
              </div>
            )))
          ) : resultsDrinks && (
            resultsDrinks.map((drink, index) => (index < magicNumber && (
              <div data-testid={ `${index}-recomendation-card` }>
                <RecipeCard
                  key={ index }
                  name={ drink.strDrink }
                  image={ drink.strDrinkThumb }
                  index={ index }
                />
              </div>
            )))
          ))

      }
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar receita
      </button>
    </div>
  );
}

RecipeDetailCard.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;

export default RecipeDetailCard;
