import React from 'react';
import PropTypes from 'prop-types';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index } = this.props;
    console.log(index);
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <h1 data-testid={ `${index}-card-name` }>
          { name }
        </h1>
        <div>
          <img
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
