import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';
import RecipeCard from '../components/RecipeCard';

export default function Foods() {
  const { setFoodOrDrink } = useContext(ProfileContext);
  const { searchFoodsResults } = useContext(FoodsContext);
  const results = searchFoodsResults ? searchFoodsResults.meals : searchFoodsResults;
  useEffect(() => {
    setFoodOrDrink('food');
  });

  const maxRecipesOnScreen = 11;
  return (
    <section>
      <Header title="Foods" />
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
      ) : ''}
      <Footer />
    </section>
  );
}
