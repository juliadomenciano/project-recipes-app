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

export default function DrinksInProgress() {
  const [linkCopied, setLinkCopied] = useState(false);
  const { id } = useParams();
  const { scribbled, handleFavorite,
    isFavorite, setIsFavorite } = useContext(InProgressContext);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    if (favoriteStorage.some((fav) => fav.id === id)) {
      return setIsFavorite(true);
    } setIsFavorite(false);
  }, [id, setIsFavorite]);

  const shareRecipe = async () => {
    const threeSeconds = 3000;
    copy(`http://localhost:3000/drinks/${id}`);
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
      <InProgressCard type="drinks" />
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
          onClick={ () => handleRecipeDone('drink', id) }
          disabled={ enableFinishBtn() }
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}
