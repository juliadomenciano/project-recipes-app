import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import doneRecipesStore from '../components/data';
import DoneRecipesCard from '../components/DoneRecipesCard';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState();

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesStore));
    const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || []);
    setDoneRecipes(getDoneRecipes);
    console.log(doneRecipes);
  }, []);
  return (
    <section>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        by Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks
      </button>
      { doneRecipes && (
        doneRecipes.map((recipe, index) => (
          recipe.type === food ? (
            <DoneRecipesCard
              image={ recipe.image }
              category={ recipe.category }
              recipeName={ recipe.name }
              doneDate={ recipe.doneDate }
              tagName={ recipe.tags }
              index={ index }
              foodOrDrink="food"
            />
          ) : (
            <DoneRecipesCard
              image={ recipe.image }
              alcoholic={ recipe.alcoholicOrNot }
              recipeName={ recipe.name }
              doneDate={ recipe.doneDate }
              index={ index }
              foodOrDrink="drink"
            />
          )
        )))}
    </section>
  );
}
