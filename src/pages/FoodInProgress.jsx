import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { foodDetails } from '../services/detailsRequestApi';

export default function FoodInProgress() {
  const [foodData, setFoodData] = useState({});
  const [scribbled, setScribbled] = useState([]);
  const path = useLocation().pathname;
  const pathId = path.replace('/foods/', '').replace('/in-progress', '');
  const { strMealThumb, strMeal, strCategory, strInstructions } = foodData;
  const ingredients = Object.entries(foodData)
    .filter((entry) => entry[0].match('strIngredient') && entry[1]) || [];

  useEffect(() => {
    const apiRequest = async () => {
      const data = await foodDetails(pathId);
      setFoodData(await data.meals[0]);
    };
    apiRequest();
  }, [pathId]);

  const handleChange = ({ target: { id } }) => (
    scribbled.includes(id)
      ? setScribbled(scribbled.filter((ingredient) => ingredient !== id))
      : setScribbled([...scribbled, id])
  );

  return (
    <div>
      {
        foodData && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ strMealThumb }
              alt={ `imagem do ${strMeal}` }
              width="300px"
            />
            <h2 data-testid="recipe-title">{ strMeal }</h2>
            <h3 data-testid="recipe-category">{ strCategory }</h3>
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
