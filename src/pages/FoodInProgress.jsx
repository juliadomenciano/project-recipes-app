import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import InProgressCard from '../components/InProgressCard';
import shareIcon from '../images/shareIcon.svg';
import notFavorited from '../images/whiteHeartIcon.svg';
import favorited from '../images/blackHeartIcon.svg';
import InProgressContext from '../context/InProgressContext/InProgressContext';

const FAVORITE_KEY = 'favoriteRecipes';

export default function FoodInProgress() {
  const [copied, setCopied] = useState(false);
  const { scribbled, handleFavorite,
    isFavorite, setIsFavorite } = useContext(InProgressContext);
  const { id } = useParams();

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    if (favoriteStorage.some((fav) => fav.id === id)) {
      return setIsFavorite(true);
    } setIsFavorite(false);
  }, []);

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
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}
