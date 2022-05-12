import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import ProfileContext from '../context/ProfileContext/ProfileContext';

import '../CSS/foods_and_drinks.css';

function Drinks(props) {
  const { setFoodOrDrink } = useContext(ProfileContext);

  const {
    searchDrinksResults,
    drinksResults,
    recipeCategories,
    filterByCategory,
    setDrinksResults,
    drinksResultsRecover,
  } = useContext(DrinksContext);

  const results = searchDrinksResults ? searchDrinksResults.drinks : searchDrinksResults;
  const resultsDrinks = drinksResults || { drinks: [] };
  const recipeCategoriesFake = recipeCategories || [{}];

  useEffect(() => {
    setFoodOrDrink('drinks');
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
      return setDrinksResults(drinksResultsRecover);
    }
  }

  function showAllRecipes() {
    select();
    return setDrinksResults(drinksResultsRecover);
  }

  function redirectToDetails(id) {
    const { history } = props;
    history.push(`/drinks/${id}`);
  }

  const maxRecipesOnScreen = 11;
  return (
    <div className="container_page_drinks">
      <Header title="Drinks" />
      <section className="main_container_drinks">
        <div className="container_filters">
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
        <div className="card_container_drinks">
          {results ? (
            results.map((drink, index) => (
              index > maxRecipesOnScreen ? '' : (
                <div
                  onClick={ () => redirectToDetails(food.idMeal) }
                  aria-hidden="true"
                >
                  <RecipeCard
                    key={ index }
                    name={ drink.strDrink }
                    image={ drink.strDrinkThumb }
                    index={ index }
                  />
                </div>
              )
            ))
          ) : resultsDrinks.drinks.map((drink, i) => (
            i > maxRecipesOnScreen ? '' : (
              <div
                onClick={ () => redirectToDetails(drink.idDrink) }
                aria-hidden="true"
              >
                <RecipeCard
                  key={ i }
                  name={ drink.strDrink }
                  image={ drink.strDrinkThumb }
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

Drinks.propTypes = {
  history: PropTypes.func.isRequired,
};

export default withRouter(Drinks);
