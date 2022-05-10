import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../index.css';

export default function DoneRecipesCard(props) {
  const { image, category, recipeName, nationality, id,
    doneDate, tagName, index, alcoholic, foodOrDrink } = props;
  const [linkCopied, setLinkCopied] = useState(false);

  const shareRecipe = () => {
    const threeSeconds = 3000;
    copy(`http://localhost:3000/foods/${id}`);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, threeSeconds);
  };

  useEffect(() => () => clearTimeout(), []);

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
          <img src={ shareIcon } alt="ícone para compartilhar" />
        </button>
        { linkCopied && <p className="alert_link_copied">Link copied!</p> }
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
