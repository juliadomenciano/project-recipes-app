import PropTypes, { object } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
// import CSS from '../modules/RecipeCard.module.css';
import ContinueRecipeButton from './ContinueRecipeButton';
import FavoriteAndShareButton from './FavoriteAndShareButton';
import IngredientsList from './IngredientsList';
import RecipeCard from './RecipeCard';
import StartRecipeButton from './StartRecipeButton';
import '../CSS/page_details.css';

function RecipeDetailCard(props) {
  const { foodOrDrink, data } = props;
  const { foodsResults } = useContext(FoodsContext);
  const { drinksResults } = useContext(DrinksContext);
  const youtubeVideoId = data.strYoutube.replace('https://www.youtube.com/watch?v=', '');
  const results = foodsResults && foodsResults.meals;
  const resultsDrinks = drinksResults && drinksResults.drinks;
  const image = data.strMealThumb;
  const category = data.strCategory;
  const instructions = data.strInstructions;
  const title = data.strMeal;
  const magicNumber = 6;
  const onlyKeys = Object.keys(data);
  const keysIngredientFood = onlyKeys.filter((key) => (
    key.match('strIngredient') && data[key] !== ''
  ));
  const ingredients = keysIngredientFood.map((ingredient) => data[ingredient]);
  const { history } = props;
  const [inProgress, setInProgress] = useState();
  const [linkCopied, setLinkCopied] = useState();

  useEffect(() => {
    function isInProgress() {
      const receitas = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const keys = receitas ? Object.keys(receitas.meals) : '';
      const result = keys && keys.find((key) => key === data.idMeal);
      return result ? setInProgress(true) : setInProgress(false);
    }
    isInProgress();
  }, [data.idMeal, inProgress]);

  return (
    <div className="contanier_food_detail">
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
      {linkCopied && <p>Link copied!</p>}
      <div className="container_recipe_title">
        <p className="recipe_category" data-testid="recipe-category">{category}</p>
        <h1 className="title_detail" data-testid="recipe-title">{title}</h1>
      </div>

      <IngredientsList foodOrDrink={ foodOrDrink } data={ data } />
      <div className="container_instructions">
        <h2>Instructions</h2>
        <p className="instructions" data-testid="instructions">{instructions}</p>
      </div>
      <div className="container_section_video">
        <h2>Video</h2>
        <iframe
          title={ title }
          data-testid="video"
          width="100%"
          height="315"
          src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
        />
      </div>
      {/* <section className={ CSS.carousel }> */}
      <section>
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
                foodOrDrink={ foodOrDrink }
                id={ drink.idDrink }
              />
            )))
          )
        }
      </section>
      {inProgress ? (
        <ContinueRecipeButton
          foodOrDrink={ foodOrDrink }
          data={ data }
          history={ history }
        />
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

RecipeDetailCard.propTypes = {
  data: PropTypes.shape(object),
  foodOrDrink: PropTypes.string,
}.isRequired;

export default withRouter(RecipeDetailCard);
