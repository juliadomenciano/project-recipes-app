import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CSS from '../modules/RecipeCard.module.css';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index, id } = this.props;
    return (
      <Link to={ `/foods/${id}` }>
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
      </Link>
    );
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string,
};
RecipeCard.defaultProps = {
  id: '',
};

export default RecipeCard;
