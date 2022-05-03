import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { drinkDetails } from '../services/detailsRequestApi';

export default function DrinkInProgress() {
  const [drinkData, setDrinkData] = useState({});
  const [scribbled, setScribbled] = useState([]);
  const path = useLocation().pathname;
  const pathId = path.replace('/drinks/', '').replace('/in-progress', '');
  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drinkData;
  const ingredients = Object.entries(drinkData)
    .filter((entry) => entry[0].match('strIngredient') && entry[1]) || [];

  useEffect(() => {
    const apiRequest = async () => {
      const data = await drinkDetails(pathId);
      setDrinkData(await data.drinks[0]);
    };
    apiRequest();
  }, []);

  const handleChange = ({ target: { id } }) => (
    scribbled.includes(id)
      ? setScribbled(scribbled.filter((ingredient) => ingredient !== id))
      : setScribbled([...scribbled, id])
  );

  return (
    <div>
      {
        drinkData && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ strDrinkThumb }
              alt={ `imagem do ${strDrink}` }
              width="300px"
            />
            <h2 data-testid="recipe-title">{ strDrink }</h2>
            <h3 data-testid="recipe-category">{ strAlcoholic }</h3>
            <p data-testid="instructions">{ strInstructions }</p>
            <ol>
              {
                ingredients
                  && ingredients
                    .map((ingredient, index) => (
                      <li key={ index } data-testid={ `${index}-ingredient-step` }>
                        <input
                          type="checkbox"
                          id={ ingredient[1] }
                          onChange={ handleChange }
                          checked={ scribbled.includes(ingredient[1]) }
                        />
                        { ingredient[1] }
                      </li>))
              }
            </ol>
            <button
              data-testid="share-btn"
              type="button"
              onClick={ () => { } }
            >
              Share
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
              onClick={ () => { } }
            >
              Add to Favorites
            </button>
            <button
              data-testid="finish-recipe-btn"
              type="button"
              onClick={ () => { } }
            >
              Finish Recipe
            </button>
          </div>
        )
      }
    </div>
  );
}
