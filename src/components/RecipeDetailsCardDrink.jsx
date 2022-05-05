import PropTypes, { object } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import { handleContinueRecipe } from '../helpers/RecipeDetailHelpers';
import CSS from '../modules/RecipeCard.module.css';
import FavoriteAndShareButton from './FavoriteAndShareButton';
import IngredientsList from './IngredientsList';
import RecipeCard from './RecipeCard';
import StartRecipeButton from './StartRecipeButton';

function RecipeDetailsCardDrink(props) {
  const { foodOrDrink, data } = props;
  const instructions = data.strInstructions;
  const { foodsResults } = useContext(FoodsContext);
  const magicNumber = 6;
  const [inProgress, setInProgress] = useState();
  const results = foodsResults ? foodsResults.meals : foodsResults;
  const image = data.strDrinkThumb;
  const title = data.strDrink;
  const category = data.strAlcoholic;
  const onlyKeys = Object.keys(data);
  const { history } = props;
  const [linkCopied, setLinkCopied] = useState();
  const keysIngredientFood = onlyKeys.filter((key) => (
    key.match('strIngredient') && data[key] !== ''
  ));
  const ingredients = keysIngredientFood.map((ingredient) => data[ingredient]);
  useEffect(() => {
    function isInProgress() {
      const receitas = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const keys = receitas ? Object.keys(receitas.cocktails) : '';
      const result = keys ? keys.find((key) => key === data.idDrink) : false;
      console.log(result);
      return result ? setInProgress(true) : setInProgress(false);
    }
    isInProgress();
  }, [data.idDrink, inProgress]);

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
      <p data-testid="recipe-category">{category}</p>
      <h1 data-testid="recipe-title">{title}</h1>
      <FavoriteAndShareButton
        data={ data }
        setLinkCopied={ setLinkCopied }
        foodOrDrink={ foodOrDrink }
      />
      {linkCopied ? <p>Link copied!</p> : ''}
      <IngredientsList foodOrDrink={ foodOrDrink } data={ data } />
      <p data-testid="instructions">{instructions}</p>
      <section className={ CSS.carousel }>
        {
          results && (
            results.map((meal, index) => (index < magicNumber && (
              <RecipeCard
                key={ index }
                testid={ [
                  `${index}-recomendation-card`, `${index}-recomendation-title`] }
                name={ meal.strMeal }
                image={ meal.strMealThumb }
                index={ index }
              />
            ))))
        }
      </section>
      {inProgress ? (
        <button
          className={ CSS.start_recipe }
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleContinueRecipe(foodOrDrink,
            data.idDrink, history) }
        >
          Continue Recipe
        </button>
      ) : (
        <StartRecipeButton
          foodOrDrink={ foodOrDrink }
          data={ data }
          ingredients={ ingredients }
          history={ history }
          setInProgress={ setInProgress }
        />
      )}
    </div>
  );
}

RecipeDetailsCardDrink.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;

export default withRouter(RecipeDetailsCardDrink);
