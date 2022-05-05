import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import InProgressCard from '../components/InProgressCard';
import shareIcon from '../images/shareIcon.svg';
import InProgressContext from '../context/InProgressContext/InProgressContext';

export default function DrinksInProgress() {
  const [copied, setCopied] = useState(false);
  const { scribbled } = useContext(InProgressContext);
  const { id } = useParams();

  const shareRecipe = async () => {
    copy(`http://localhost:3000/drinks/${id}`);
    setCopied(true);
  };

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
      <Link to="/done-recipes">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          onClick={ () => { } }
          disabled={ enableFinishBtn() }
        >
          Finish Recipe
        </button>
      </Link>
    </div>
  );
}
