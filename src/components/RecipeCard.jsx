import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CSS from '../modules/RecipeCard.module.css';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index, id, testid, foodOrDrink } = this.props;
    return (
      foodOrDrink === 'food' ? (
        <Link to={ `/drinks/${id}` }>
          <section data-testid={ `${index}-recipe-card` }>
            <div
              className={ CSS.cards }
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div data-testid={ testid ? testid[1] : '' }>
                <h1 data-testid={ `${index}-card-name` }>
                  { name }
                </h1>
                <img
                  className={ CSS.image }
                  src={ image }
                  alt={ `imagem da receita ${name}` }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </div>
          </section>
        </Link>
      ) : (
        <Link to={ `/foods/${id}` }>
          <section data-testid={ `${index}-recipe-card` }>
            <div
              className={ CSS.cards }
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div data-testid={ testid ? testid[1] : '' }>
                <h1 data-testid={ `${index}-card-name` }>
                  { name }
                </h1>
                <img
                  className={ CSS.image }
                  src={ image }
                  alt={ `imagem da receita ${name}` }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </div>
          </section>
        </Link>
      )
    );
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  testid: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string,
  foodOrDrink: PropTypes.string.isRequired,
};
RecipeCard.defaultProps = {
  id: '',
};

export default RecipeCard;
