import PropTypes, { object } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import { handleContinueRecipe } from '../helpers/RecipeDetailHelpers';
// import CSS from '../modules/RecipeCard.module.css';
import FavoriteAndShareButton from './FavoriteAndShareButton';
import IngredientsList from './IngredientsList';
import RecipeCardCarousel from './RecipeCardCarousel';
import StartRecipeButton from './StartRecipeButton';

import '../CSS/page_details.css';
import '../CSS/status_recipe.css';
import '../CSS/recommended.recipe.css';

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
    <div className="contanier_drink_detail">
      <div className="container_img_detail">
        <img
          data-testid="recipe-photo"
          src={ image }
          alt={ `imagem da receita ${title}` }
          className="img_detail"
        />
      </div>
      <FavoriteAndShareButton
        data={ data }
        setLinkCopied={ setLinkCopied }
        foodOrDrink={ foodOrDrink }
      />
      {/* {linkCopied && <p className="alert_link_copied">Link copied!</p>} */}
      {/* a linha acima e como esta em comidas */}
      {linkCopied ? <p className="alert_link_copied">Link copied!</p> : ''}
      <div className="container_recipe_title">
        <h3 className="recipe_category" data-testid="recipe-category">{category}</h3>
        <h1 data-testid="recipe-title">{title}</h1>
      </div>

      <IngredientsList foodOrDrink={ foodOrDrink } data={ data } />
      <div className="container_instructions">
        <h2>Instructions</h2>
        <p className="instructions" data-testid="instructions">{instructions}</p>
      </div>
      <div className="recommended_recipe_container">
        <h2>Recommended</h2>

        <section className="carousel">
          {
            results && (
              results.map((meal, index) => (index < magicNumber && (
                <RecipeCardCarousel
                  key={ index }
                  testid={ [
                    `${index}-recomendation-card`, `${index}-recomendation-title`] }
                  name={ meal.strMeal }
                  image={ meal.strMealThumb }
                  index={ index }
                  foodOrDrink={ foodOrDrink }
                  id={ meal.idMeal }
                />
              ))))
          }
        </section>
      </div>

      {inProgress ? (
        <button
          className="status_recipe"
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
