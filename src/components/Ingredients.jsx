import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import DrinksContext from '../context/DrinksContext/DrinksContext';
import FoodsContext from '../context/FoodsContext/FoodsContext';

function Ingredients(props) {
  const { fetchByIngredient } = useContext(FoodsContext);
  const { fetchByDrinkIngredient } = useContext(DrinksContext);
  const { name, index, type } = props;
  const foodOrDrink = type === 'drink'
    ? `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`
    : `https://www.themealdb.com/images/ingredients/${name}-Small.png`;
  const location = useLocation();
  /*     console.log(location);
  console.log(foodOrDrink); */

  const redirectToDetails = async (ingredient) => {
    const { history } = props;
    if (location.pathname === '/explore/drinks/ingredients') {
      history.push('/drinks');
      fetchByDrinkIngredient(ingredient);
    } else {
      history.push('/foods');
      fetchByIngredient(ingredient);
    }
  };

  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      onClick={ () => redirectToDetails(name) }
      aria-hidden="true"
      className="card_ingredient"
    >
      <img
        src={ foodOrDrink }
        alt={ name }
        data-testid={ `${index}-card-img` }
        className="image_ingredient"
      />
      <h2
        data-testid={ `${index}-card-name` }
        className="name_ingredient"
      >
        { name }
      </h2>

    </div>
  );
}

Ingredients.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number.isRequired,
  type: PropTypes.string,
  history: PropTypes.func.isRequired,
};

Ingredients.defaultProps = {
  name: '',
  type: '',
};

export default withRouter(Ingredients);
