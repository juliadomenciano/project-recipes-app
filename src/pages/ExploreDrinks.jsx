import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../CSS/page_explore_drink.css';

export default function ExploreDrinks() {
  const [randomDrinkUrl, setRandomDrinkUrl] = useState();

  const randomDrink = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomDrinkUrl(data.drinks[0].idDrink);
  };

  useEffect(() => { randomDrink(); }, []);

  return (
    <section className="container_page_explore_drinks">
      <Header title="Explore Drinks" />
      <div className="container_explore_drinks">
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="explore_by_ingredient"
          >
            <span className="title_button">By Ingredient</span>
          </button>
        </Link>
        <Link to={ `/drinks/${randomDrinkUrl}` }>
          <button
            type="button"
            data-testid="explore-surprise"
            className="explore_suprise"
          >
            <span className="title_button">Surprise me!</span>
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
