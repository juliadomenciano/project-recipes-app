import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import RecipeCard from '../components/RecipeCard';

import CSS from '../modules/Foods.modules.css';
import CSS2 from '../modules/RecipeCard.module.css';

function Foods(props) {
  const { setFoodOrDrink } = useContext(ProfileContext);
  const {
    searchFoodsResults,
    foodsResults,
    recipeCategories,
    filterByCategory,
    foodsResultsRecover,
    setFoodsResults,
    // setSearchFoodsResults,
  } = useContext(FoodsContext);

  const results = searchFoodsResults ? searchFoodsResults.meals : searchFoodsResults;
  const resultsFoods = foodsResults || { meals: [] };
  const recipeCategoriesFake = recipeCategories || [{}];

  useEffect(() => {
    setFoodOrDrink('food');
  });

  function selectFilter(category, target) {
    if (target.className === 'notSelected') {
      filterByCategory(category);
      target.classList.remove('notSelected');
      target.classList.add('selected');
    } else {
      target.classList.remove('selected');
      target.classList.add('notSelected');
      return setFoodsResults(foodsResultsRecover);
    }
  }

  function showAllRecipes() {
    return setFoodsResults(foodsResultsRecover);
  }

  function redirectToDetails(id) {
    const { history } = props;
    history.push(`/foods/${id}`);
  }

  const maxRecipesOnScreen = 11;
  return (
    <div className={ CSS.conteiner_foods }>
      <Header title="Foods" />
      <section className={ CSS2.mainContainer }>
        <div>
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ () => showAllRecipes() }
          >
            All
          </button>
          {recipeCategoriesFake.map((category, index) => (
            <button
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              key={ index }
              className="notSelected"
              onClick={ ({ target }) => selectFilter(category.strCategory, target) }
            >
              {category.strCategory}
            </button>
          ))}
        </div>
        <div className={ CSS2.CardsContainer }>
          {results ? (
            results.map((food, index) => (
              index > maxRecipesOnScreen ? '' : (
                <div
                  onClick={ () => redirectToDetails(food.idMeal) }
                  aria-hidden="true"
                >
                  <RecipeCard
                    key={ index }
                    name={ food.strMeal }
                    image={ food.strMealThumb }
                    index={ index }
                  />
                </div>
              )
            ))
          ) : resultsFoods.meals.map((food, i) => (
            i > maxRecipesOnScreen ? '' : (
              <div
                onClick={ () => redirectToDetails(food.idMeal) }
                aria-hidden="true"
              >
                <RecipeCard
                  key={ i }
                  name={ food.strMeal }
                  image={ food.strMealThumb }
                  index={ i }
                />
              </div>
            )
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.func.isRequired,
};

export default withRouter(Foods);
