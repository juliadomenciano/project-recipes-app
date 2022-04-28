import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import RecipeCard from '../components/RecipeCard';

export default function Drinks() {
  const { setFoodOrDrink } = useContext(ProfileContext);
  const { searchDrinksResults } = useContext(DrinksContext);
  const results = searchDrinksResults ? searchDrinksResults.drinks : searchDrinksResults;

  useEffect(() => {
    setFoodOrDrink('drinks');
  });

  const maxRecipesOnScreen = 11;
  return (
    <section>
      <Header title="Drinks" />
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
      ) : ''}
      <Footer />
    </section>
  );
}
