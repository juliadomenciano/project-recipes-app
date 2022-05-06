import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState();
  const [filter, setFilter] = useState(doneRecipes);

  useEffect(() => {
    const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(getDoneRecipes);
  }, []);
  return (
    <section>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ fliterRecipes('') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ fliterRecipes('drink') }
      >
        by Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ fliterRecipes('food') }
      >
        Drinks
      </button>
      { doneRecipes && (
        doneRecipes.map((recipe, index) => (
          recipe.type === food ? (
            <DoneRecipesCard
              key={ index }
              id={ recipe.id }
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
              key={ index }
              id={ recipe.id }
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
