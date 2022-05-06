import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipesCard(props) {
  const { image, category, recipeName, nationality, id,
    doneDate, tagName, index, alcoholic, foodOrDrink } = props;
  const [copied, setCopied] = useState(false);

  const shareRecipe = () => {
    copy(`http://localhost:3000/foods/${id}`);
    setCopied(true);
  };

  return (
    <section key={ index }>
      <img
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt="Imagem da receita"
      />
      <div>
        {
          foodOrDrink === 'food'
            ? (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${category}`}
              </p>
            )
            : (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {alcoholic}
              </p>
            )
        }
        <h2 data-testid={ `${index}-horizontal-name` }>
          {recipeName}
        </h2>
        <p data-testid={ `${index}-horizontal-done-date` }>
          { doneDate }
        </p>
        <button
          data-testid={ `${index}-horizontal-share-btn` }
          type="button"
          src={ shareIcon }
          onClick={ shareRecipe }
        >
          {
            copied
              ? <span>Link copied!</span>
              : <img src={ shareIcon } alt="ícone para compartilhar" />
          }
        </button>
        {
          foodOrDrink === 'food'
            && tagName.map((tag, idx) => (
              <p
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ `tag${idx}` }
              >
                { tag }
              </p>
            ))
        }
      </div>
    </section>
  );
}

DoneRecipesCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  recipeName: PropTypes.string,
  finishedData: PropTypes.string,
  tagName: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
}.isRequired;
