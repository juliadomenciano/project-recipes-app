import React, { useEffect, useState } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  const [doneRecipes, setDoneRecipes] = useState();
  const [filter, setFilter] = useState('');
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    async function getLocalStorage() {
      const getFavoriteRecipes = await JSON.parse(localStorage
        .getItem('favoriteRecipes'));

      setDoneRecipes(getFavoriteRecipes);
    }
    getLocalStorage();
  }, [favorite]);

  const fliterRecipes = (item) => {
    if (filter !== '') {
      return filter === item.type;
    }
    return true;
  };

  return (
    <section>
      <Header title="Favorite Recipes" />
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
        doneRecipes.filter((item) => fliterRecipes(item)).map((recipe, index) => (
          recipe.type === 'food' ? (
            <FavoriteRecipeCard
              key={ index }
              id={ recipe.id }
              image={ recipe.image }
              category={ recipe.category }
              nationality={ recipe.nationality }
              recipeName={ recipe.name }
              index={ index }
              foodOrDrink="foods"
              setFavorite={ setFavorite }
              favorite={ favorite }
            />
          ) : (
            <FavoriteRecipeCard
              key={ index }
              id={ recipe.id }
              image={ recipe.image }
              alcoholic={ recipe.alcoholicOrNot }
              recipeName={ recipe.name }
              doneDate={ recipe.doneDate }
              index={ index }
              foodOrDrink="drinks"
              setFavorite={ setFavorite }
              favorite={ favorite }
            />
          )
        )))}
    </section>
  );
}
