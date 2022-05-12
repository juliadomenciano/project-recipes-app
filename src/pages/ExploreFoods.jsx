import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../CSS/page_explore_food.css';

export default function ExploreFoods() {
  const [randomFoodUrl, setRandomFoodUrl] = useState();

  const randomFood = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomFoodUrl(data.meals[0].idMeal);
  };

  useEffect(() => { randomFood(); }, []);

  return (
    <section className="container_page_explore_foods">
      <Header title="Explore Foods" />
      <div className="container_explore_foods">
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="explore_food_by_ingredient"
          >
            <span className="title_button">By Ingredient</span>
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
            className="explore_food_by_nationality"
          >
            <span className="title_button">By Nationality</span>
          </button>
        </Link>
        <Link to={ `/foods/${randomFoodUrl}` }>
          <button
            type="button"
            data-testid="explore-surprise"
            className="explore_food_by_surprise"
          >
            <span className="title_button">Surprise me!</span>
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
