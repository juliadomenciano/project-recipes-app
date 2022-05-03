import PropTypes from 'prop-types';
import React from 'react';
import CSS from '../modules/RecipeCard.module.css';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index, testid } = this.props;
    console.log(index);
    console.log(name);
    return (
      <div
        className={ CSS.cards }
        data-testid={ testid[0] }
      >
        <h1 data-testid={ testid[1] }>
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
  testid: PropTypes.string.isRequired,
};

export default RecipeCard;
