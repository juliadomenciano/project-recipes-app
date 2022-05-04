import PropTypes from 'prop-types';
import React from 'react';
import CSS from '../modules/RecipeCard.module.css';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index } = this.props;
    return (
      <div className={ CSS.cards } data-testid={ `${index}-recipe-card` }>
        <h1 data-testid={ `${index}-card-name` }>
          { name }
        </h1>
        <div>
          <img
            className={ CSS.image }
            src={ image }
            alt={ `imagem da receita ${name}` }
            data-testid={ `${index}-card-img` }
          />
        </div>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
