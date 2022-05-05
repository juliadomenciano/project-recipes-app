import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoods() {
  const [randomFoodUrl, setRandomFoodUrl] = useState();

  const randomFood = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomFoodUrl(data.meals[0].idMeal);
  };

  useEffect(() => { randomFood(); }, []);

  return (
    <section>
      <Header title="Explore Foods" />
      <div>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>
        <Link to={ `/foods/${randomFoodUrl}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
