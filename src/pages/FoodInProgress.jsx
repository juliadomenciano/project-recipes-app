import copy from 'clipboard-copy';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import InProgressContext from '../context/InProgressContext/InProgressContext';
import favorited from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import notFavorited from '../images/whiteHeartIcon.svg';
import { handleRecipeDone } from '../helpers/RecipeDetailHelpers';

const FAVORITE_KEY = 'favoriteRecipes';

export default function FoodInProgress() {
  const [linkCopied, setLinkCopied] = useState(false);
  const { scribbled, handleFavorite,
    isFavorite, setIsFavorite } = useContext(InProgressContext);
  const { id } = useParams();
  const path = useLocation().pathname;
  const removeInProgress = path.replace('/in-progress', '');
  const foodId = removeInProgress.replace('/foods/', '');

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    if (favoriteStorage.some((fav) => fav.id === id)) {
      return setIsFavorite(true);
    } setIsFavorite(false);
  }, [id, setIsFavorite]);

  const shareRecipe = () => {
    const threeSeconds = 3000;
    copy(`http://localhost:3000/foods/${id}`);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, threeSeconds);
  };

  useEffect(() => () => clearTimeout(), []);

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
        <img src={ shareIcon } alt="ícone para compartilhar" />
      </button>
      { linkCopied && <p className="alert_link_copied">Link copied!</p> }
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
          onClick={ () => handleRecipeDone('food', foodId) }
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}
