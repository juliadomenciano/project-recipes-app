import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { drinkDetails } from '../services/detailsRequestApi';

const IN_PROGRESS_KEY = 'inProgressRecipes';

export default function DrinkInProgress() {
  const [drinkData, setDrinkData] = useState({});
  const [scribbled, setScribbled] = useState([]);
  const progressStorage = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY));
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
    const checkStorage = progressStorage
      ? Object.keys(progressStorage).includes('drinks')
      : false;
    const saveObject = {
      ...progressStorage,
      drinks: checkStorage
        ? {
          ...progressStorage.drinks,
          [pathId]: progressStorage.drinks[pathId] || scribbled,
        }
        : { [pathId]: [] },
    };
    localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify(saveObject));
  }, []);

  const handleChange = ({ target: { id } }) => {
    const saveObject = (updatedList) => ({
      ...progressStorage, drinks: { ...progressStorage.drinks, [pathId]: updatedList },
    });
    if (scribbled.includes(id)) {
      const removeIngredient = scribbled.filter((ingredient) => ingredient !== id);
      setScribbled(removeIngredient);
      return localStorage
        .setItem(IN_PROGRESS_KEY, JSON.stringify(saveObject(removeIngredient)));
    } const addIngredient = [...scribbled, id];
    setScribbled(addIngredient);
    return localStorage
      .setItem(IN_PROGRESS_KEY, JSON.stringify(saveObject(addIngredient)));
  };

  const handleChecked = (ingredient) => {
    if (!progressStorage) {
      return scribbled.includes(ingredient);
    }
    const savedMeals = progressStorage ? progressStorage.drinks[pathId] : '';
    return savedMeals.includes(ingredient);
  };

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
                          checked={ handleChecked(ingredient[1]) }
                          className="ingredients-checkbox"
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
