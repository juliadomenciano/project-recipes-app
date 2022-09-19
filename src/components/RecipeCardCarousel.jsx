import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class RecipeCardCarousel extends React.Component {
  render() {
    const { name, image, index, id, testid, foodOrDrink } = this.props;
    return (
      foodOrDrink === 'food' ? (
        <Link to={ `/drinks/${id}` }>
          <section data-testid={ `${index}-recipe-card` }>
            <div
              className="cards_carousel"
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div
                data-testid={ testid ? testid[1] : '' }
                className="card_carousel"
              >
                <h1
                  data-testid={ `${index}-card-name` }
                  className="card_title_carousel"
                >
                  { name }
                </h1>
                <img
                  className="card_image_carousel"
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
              className="cards_carousel"
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div
                data-testid={ testid ? testid[1] : '' }
                className="card_carousel"
              >
                <h1
                  data-testid={ `${index}-card-name` }
                  className="card_title_carousel"
                >
                  { name }
                </h1>
                <img
                  className="card_image_carousel"
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

RecipeCardCarousel.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  testid: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string,
  foodOrDrink: PropTypes.string.isRequired,
};
RecipeCardCarousel.defaultProps = {
  id: '',
};

export default RecipeCardCarousel;
