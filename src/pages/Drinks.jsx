import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import RecipeCard from '../components/RecipeCard';
import CSS2 from '../modules/RecipeCard.module.css';

export default function Drinks() {
  const { setFoodOrDrink } = useContext(ProfileContext);
  const {
    searchDrinksResults,
    drinksResults,
    recipeCategories,
    filterByCategory,
  } = useContext(DrinksContext);
  const results = searchDrinksResults ? searchDrinksResults.drinks : searchDrinksResults;
  const resultsDrinks = drinksResults || { drinks: [] };
  const recipeCategoriesFake = recipeCategories || [{}];

  useEffect(() => {
    setFoodOrDrink('drinks');
  });

  const maxRecipesOnScreen = 11;
  return (
    <div>
      <div>
        <Header title="Drinks" />
        <section className={ CSS2.mainContainer }>
          <div>
            {recipeCategoriesFake.map((category, index) => (
              <button
                type="button"
                data-testid={ `${category.strCategory}-category-filter` }
                key={ index }
                onClick={ () => filterByCategory(category.strCategory) }
              >
                {category.strCategory}
              </button>
            ))}
          </div>
          <div className={ CSS2.CardsContainer }>
            {results ? (
              results.map((drink, index) => (
                index > maxRecipesOnScreen ? '' : (
                  <RecipeCard
                    key={ index }
                    name={ drink.strDrink }
                    image={ drink.strDrinkThumb }
                    index={ index }
                  />
                )
              ))
            ) : resultsDrinks.drinks.map((drink, i) => (
              i > maxRecipesOnScreen ? '' : (
                <RecipeCard
                  key={ i }
                  name={ drink.strDrink }
                  image={ drink.strDrinkThumb }
                  index={ i }
                />
              )
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
