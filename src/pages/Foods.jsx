import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import RecipeCard from '../components/RecipeCard';

import CSS from '../modules/Foods.modules.css';
import CSS2 from '../modules/RecipeCard.module.css';

export default function Foods() {
  const { setFoodOrDrink } = useContext(ProfileContext);
  const {
    searchFoodsResults,
    foodsResults,
    recipeCategories,
    filterByCategory } = useContext(FoodsContext);

  const results = searchFoodsResults ? searchFoodsResults.meals : searchFoodsResults;
  const resultsFoods = foodsResults || { meals: [] };
  const recipeCategoriesFake = recipeCategories || [{}];

  useEffect(() => {
    setFoodOrDrink('food');
  });

  const maxRecipesOnScreen = 11;
  return (
    <div className={ CSS.conteiner_foods }>
      <Header title="Foods" />
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
            results.map((food, index) => (
              index > maxRecipesOnScreen ? '' : (
                <RecipeCard
                  key={ index }
                  name={ food.strMeal }
                  image={ food.strMealThumb }
                  index={ index }
                />
              )
            ))
          ) : resultsFoods.meals.map((food, i) => (
            i > maxRecipesOnScreen ? '' : (
              <RecipeCard
                key={ i }
                name={ food.strMeal }
                image={ food.strMealThumb }
                index={ i }
              />
            )
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
