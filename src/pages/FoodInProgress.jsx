import copy from 'clipboard-copy';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import InProgressContext from '../context/InProgressContext/InProgressContext';
import { handleRecipeDone } from '../helpers/RecipeDetailHelpers';
import favorited from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import notFavorited from '../images/whiteHeartIcon.svg';

const FAVORITE_KEY = 'favoriteRecipes';

export default function FoodInProgress() {
  const [copied, setCopied] = useState(false);
  const { scribbled, handleFavorite,
    isFavorite, setIsFavorite, recipeData } = useContext(InProgressContext);
  const { id } = useParams();

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    console.log('carreguei');
    if (favoriteStorage.some((fav) => fav.id === id)) {
      return setIsFavorite(true);
    } setIsFavorite(false);
  }, [id, setIsFavorite]);

  const shareRecipe = () => {
    copy(`http://localhost:3000/foods/${id}`);
    setCopied(true);
  };

  const enableFinishBtn = () => {
    const checkboxes = Array.from(document.querySelectorAll('input'));
    const disableBtn = checkboxes.length > scribbled.length;
    return disableBtn;
  };

  return (
    <div>
      <InProgressCard type="foods" />
      <button
        data-testid="share-btn"
        type="button"
        onClick={ shareRecipe }
      >
        {
          copied
            ? <span>Link copied!</span>
            : <img src={ shareIcon } alt="ícone para compartilhar" />
        }
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ handleFavorite }
        src={ isFavorite ? favorited : notFavorited }
      >
        <img src={ isFavorite ? favorited : notFavorited } alt="Ícone de favoritar" />
      </button>
      <Link to="/done-recipes">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ enableFinishBtn() }
          onClick={ () => handleRecipeDone('food', recipeData) }
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}
