import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import FoodsContext from '../context/FoodsContext/FoodsContext';

export default function ExploreFoodsNationalities() {
  const { nationalities, nationalitiesCards,
    handleChange, option, filterByNationality } = useContext(FoodsContext);

  useEffect(() => { filterByNationality(); console.log(option); }, [option,
    filterByNationality]);

  return (
    <section>
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
      <div className="container_foods">
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
