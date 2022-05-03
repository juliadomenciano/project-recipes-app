import PropTypes from 'prop-types';
import React from 'react';

export default function Ingredients(props) {
  const { name, index, type } = props;
  const foodOrDrink = type === 'drink'
    ? `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`
    : `https://www.themealdb.com/images/ingredients/${name}-Small.png`;
  console.log(foodOrDrink);
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        src={ foodOrDrink }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <h2 data-testid={ `${index}-card-name` }>
        { name }
      </h2>

    </div>
  );
}

Ingredients.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number.isRequired,
  type: PropTypes.string,
};

Ingredients.defaultProps = {
  name: '',
  type: '',
};
