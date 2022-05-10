import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../index.css';

export default function DoneRecipesCard(props) {
  const { image, category, recipeName, nationality, id,
    doneDate, tagName, index, alcoholic, foodOrDrink } = props;
  const [copied, setCopied] = useState(false);
  const threeSeconds = 3000;
  console.log(tagName);

  const shareRecipe = () => {
    copy(`http://localhost:3000/${foodOrDrink}s/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, threeSeconds);
  };

  return (
    <section key={ index }>
      <Link to={ `/${foodOrDrink}s/${id}` }>
        <img
          className="doneImg"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt="Imagem da receita"
        />
      </Link>

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
        <Link to={ `/${foodOrDrink}s/${id}` }>
          <h2 data-testid={ `${index}-horizontal-name` }>
            {recipeName}
          </h2>
        </Link>
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
        { tagName
            && tagName.map((tag, idx) => (
              <p
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ `tag${idx}` }
              >
                { tag }
              </p>
            ))}
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
