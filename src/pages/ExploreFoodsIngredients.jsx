import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';

export default function ExploreFoodsIngredients() {
  const [ingredients, setIngredients] = useState();
  useEffect(() => {
    const foodIngredients = async () => {
      const twelve = 12;
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const data = await request.json();
      const arrWithTwelve = data.meals.slice(0, twelve);
      setIngredients(arrWithTwelve);
    };
    foodIngredients();
  }, []);
  return (
    <section>
      <Header title="Explore Ingredients" />
      <div className="conteiner_foods_ingredidentes">
        {ingredients
        && ingredients.map((item, index) => (
          <Ingredients
            key={ index }
            name={ item.strIngredient }
            index={ index }
          />

        ))}
      </div>
      <Footer />
    </section>
  );
}
