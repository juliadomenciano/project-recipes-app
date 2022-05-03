import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import FoodsContext from '../context/FoodsContext/FoodsContext';
/* import searchFoodOrDrinkApi from '../services/searchFoodOrDrinkApi'; */

export default function ExploreFoodsIngredients() {
  const { ingredients, foodIngredients } = useContext(FoodsContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { foodIngredients(); }, []);
  return (
    <section>
      <Header title="Explore Ingredients" />
      {ingredients
      && ingredients.map((item, index) => (
        <Ingredients
          key={ index }
          name={ item.strIngredient }
          index={ index }
        />

      ))}
      <Footer />
    </section>
  );
}
