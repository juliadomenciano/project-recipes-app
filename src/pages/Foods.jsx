import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import CSS from '../modules/FoodsDrinks.module.css';

import '../CSS/foods_and_drinks.css';

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

  function select() {
    Array.from(document.querySelectorAll('.selected'))
      .forEach((button) => button.classList.add('notSelected'));
    Array.from(document.querySelectorAll('.selected'))
      .forEach((button) => button.classList.remove('selected'));
  }

  function selectFilter(category, target) {
    if (target.className === 'notSelected') {
      filterByCategory(category);
      select();
      target.classList.remove('notSelected');
      target.classList.add('selected');
    } else {
      select();
      // target.classList.add('notSelected');
      return setFoodsResults(foodsResultsRecover);
    }
  }

  function showAllRecipes() {
    select();
    return setFoodsResults(foodsResultsRecover);
  }

  function redirectToDetails(id) {
    const { history } = props;
    history.push(`/foods/${id}`);
  }

  const maxRecipesOnScreen = 11;
  return (
    <div className="container_page_foods">
      <Header title="Foods" />
      <section className="main_container_foods">
        <div className={ CSS.filters }>
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
        <div className="card_container_foods">
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
                key={ i }
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
