import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import InProgressCard from '../components/InProgressCard';
import shareIcon from '../images/shareIcon.svg';

export default function FoodInProgress() {
  const [copied, setCopied] = useState(false);
  const { id } = useParams();

  const shareRecipe = async () => {
    console.log(id);
    copy(`http://localhost:3000/foods/${id}`);
    setCopied(true);
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
  );
}
