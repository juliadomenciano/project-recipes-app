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

  const filterRecipes = () => {
    if (filter !== '') {
      const filteredRecipes = doneRecipes.filter((item) => item.type === type);
      return filteredRecipes;
    }
    return doneRecipes;
  };
  return (
    <section>
      <Header title="Done Recipes" />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setFilter('') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFilter('food') }
      >
        by Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </button>
      { doneRecipes && (
        filterRecipes().map((recipe, index) => (
          recipe.type === 'food' ? (
            <DoneRecipesCard
              key={ index }
              id={ recipe.id }
              image={ recipe.image }
              category={ recipe.category }
              nationality={ recipe.nationality }
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
