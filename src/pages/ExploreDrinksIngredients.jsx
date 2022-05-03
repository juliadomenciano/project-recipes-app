import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import DrinksContext from '../context/DrinksContext/DrinksContext';

export default function ExploreDrinksIngredients() {
  const { ingredients, DrinksIngredients } = useContext(DrinksContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { DrinksIngredients(); }, []);
  return (
    <section>
      <Header title="Explore Ingredients" />
      {ingredients
      && ingredients.map((item, index) => (
        <Ingredients
          key={ index }
          name={ item.strIngredient1 }
          index={ index }
          type="drink"
        />

      ))}
      <Footer />
    </section>
  );
}
