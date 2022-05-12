import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import FoodsContext from '../context/FoodsContext/FoodsContext';

import '../CSS/foods_by_nationality.css';

export default function ExploreFoodsNationalities() {
  const { nationalities,
    handleChange, option } = useContext(FoodsContext);

  const [nationalitiesCards, setNationalitiesCards] = useState();
  const FoodsApiWithTwelve = async (url) => {
    const twelve = 12;
    const request = await fetch(url);
    const data = await request.json();
    const arrWithTwelve = data.meals.slice(0, twelve);
    setNationalitiesCards(arrWithTwelve);
  };

  useEffect(() => {
    const filterByNationality = async () => {
      const urlFilter = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${option}`;
      const urlAll = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      if (option === 'all') {
        FoodsApiWithTwelve(urlAll);
      } else {
        FoodsApiWithTwelve(urlFilter);
      }
    };
    filterByNationality();
  }, [option]);

  return (
    <section className="container_page_foods_nationalities">
      <Header title="Explore Nationalities" />
      <form>
        <label htmlFor="filter">
          <select
            data-testid="explore-by-nationality-dropdown"
            name="filter"
            value={ option }
            onChange={ handleChange }
          >
            <option
              value="all"
              data-testid="All-option"
            >
              All
            </option>
            { nationalities
      && nationalities.map((item, index) => (
        <option
          key={ index }
          value={ item.strArea }
          data-testid={ `${item.strArea}-option` }
        >
          {item.strArea}
        </option>
      ))}
          </select>
        </label>
      </form>
      <div className="container_foods_by_nationalities">
        {nationalitiesCards
        && nationalitiesCards.map((item, index) => (
          <RecipeCard
            key={ index }
            name={ item.strMeal }
            id={ item.idMeal }
            image={ item.strMealThumb }
            index={ index }
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}
