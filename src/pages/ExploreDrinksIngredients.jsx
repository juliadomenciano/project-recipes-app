import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';

import '../CSS/page_explore_drinks_ingredientes.css';

export default function ExploreDrinksIngredients() {
  const [ingredients, setIngredients] = useState();
  useEffect(() => {
    const DrinksIngredients = async () => {
      const twelve = 12;
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const data = await request.json();
      const arrWithTwelve = data.drinks.slice(0, twelve);
      setIngredients(arrWithTwelve);
    };
    DrinksIngredients();
  }, []);
  return (
    <section className="container_page_explore_drinks_ingredientes">
      <Header title="Explore Ingredients" />
      <div className="conteiner_drinks_ingredientes">
        {ingredients
        && ingredients.map((item, index) => (
          <Ingredients
            key={ index }
            name={ item.strIngredient1 }
            index={ index }
            type="drink"
          />

        ))}
      </div>
      <Footer />
    </section>
  );
}
