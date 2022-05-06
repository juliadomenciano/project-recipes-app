import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipesCard(props) {
  const { image, category, recipeName,
    doneDate, tagName, index, alcoholic, foodOrDrink } = props;
  return (
    <section>
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
                {category}
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
        >
          <img src={ shareIcon } alt="Share" />
        </button>
        {
          foodOrDrink === 'food'
            && tagName.map((tag) => (
              <p
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ index }
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
}.isRequired;
