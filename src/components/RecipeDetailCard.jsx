import PropTypes, { object } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import { handleStartRecipe } from '../helpers/RecipeDetailHelpers';
import CSS from '../modules/RecipeCard.module.css';
import IngredientsList from './IngredientsList';
import RecipeCard from './RecipeCard';

function RecipeDetailCard(props) {
  const { foodOrDrink, data } = props;
  const { foodsResults } = useContext(FoodsContext);
  const { drinksResults } = useContext(DrinksContext);
  const youtubeVideoId = data.strYoutube.replace('https://www.youtube.com/watch?v=', '');
  const results = foodsResults ? foodsResults.meals : foodsResults;
  const resultsDrinks = drinksResults ? drinksResults.drinks : drinksResults;
  const image = data.strMealThumb;
  const title = data.strMeal;
  const category = data.strCategory;
  const instructions = data.strInstructions;
  const magicNumber = 6;
  const onlyKeys = Object.keys(data);
  const keysIngredientFood = onlyKeys.filter((key) => (
    key.match('strIngredient') && data[key] !== ''
  ));
  const ingredients = keysIngredientFood.map((ingredient) => data[ingredient]);
  const [inProgress, setInProgress] = useState();

  useEffect(() => {
    function isInProgress() {
      const receitas = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const keys = receitas ? Object.keys(receitas.meals) : '';
      const result = keys ? keys.find((key) => key === data.idMeal) : false;
      console.log(result);
      return result ? setInProgress(true) : setInProgress(false);
    }
    isInProgress();
  }, [data.idMeal, inProgress]);

  return (
    <div>
      <div className={ CSS.container_img }>
        <img
          data-testid="recipe-photo"
          src={ image }
          alt={ `imagem da receita ${title}` }
          className={ CSS.img_detail_page }
        />
      </div>
      <h1 data-testid="recipe-title">{title}</h1>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => console.log('') }
      >
        compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => console.log('') }
      >
        favoritar
      </button>
      <p data-testid="recipe-category">{category}</p>
      <IngredientsList foodOrDrink={ foodOrDrink } data={ data } />
      <p data-testid="instructions">{instructions}</p>
      <iframe
        title={ title }
        data-testid="video"
        width="420"
        height="315"
        src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
      />
      <section className={ CSS.carousel }>
        {
          results && resultsDrinks && (
            resultsDrinks.map((drink, index) => (index < magicNumber && (
              <RecipeCard
                key={ index }
                testid={ [
                  `${index}-recomendation-card`, `${index}-recomendation-title`] }
                name={ drink.strDrink }
                image={ drink.strDrinkThumb }
                index={ index }
              />
            )))
          )
        }
      </section>
      {inProgress ? (
        <button
          className={ CSS.start_recipe }
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => console.log('tAAAAAAAAAAAAAAAAAAAAa funfando') }
        >
          Continue Recipe
        </button>
      ) : (
        <button
          className={ CSS.start_recipe }
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => [handleStartRecipe(foodOrDrink,
            data.idMeal, ingredients),
          setInProgress(true)] }
        >
          Iniciar receita
        </button>)}
    </div>
  );
}

RecipeDetailCard.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;

export default RecipeDetailCard;
