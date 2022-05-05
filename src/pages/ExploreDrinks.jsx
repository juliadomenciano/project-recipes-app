import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDrinks() {
  const [randomDrinkUrl, setRandomDrinkUrl] = useState();

  const randomDrink = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomDrinkUrl(data.drinks[0].idDrink);
  };

  useEffect(() => { randomDrink(); }, []);

  return (
    <section>
      <Header title="Explore Drinks" />
      <div>
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to={ `/drinks/${randomDrinkUrl}` }>
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
