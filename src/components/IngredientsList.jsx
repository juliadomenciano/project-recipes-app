import PropTypes from 'prop-types';
import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const { data, foodOrDrink } = this.props;
    const onlyKeys = Object.keys(data);
    const keysIngredientDrink = onlyKeys.filter((key) => (
      key.match('strIngredient') && data[key] !== null
    ));
    const keysIngredientFood = onlyKeys.filter((key) => (
      key.match('strIngredient') && data[key] !== ''
    ));
    const quant = onlyKeys.filter((key) => (
      key.match('strMeasure') && data[key] !== null
    ));
    return (
      <section className="carousel" aria-label="Gallery">
        <ol>
          { foodOrDrink === 'food' ? (keysIngredientFood.map((key, index) => (
            <div key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              <li>{data[key]}</li>
              <li>{data[quant[index]]}</li>
            </div>
          ))) : (keysIngredientDrink.map((key, index1) => (
            <div key={ index1 } data-testid={ `${index1}-ingredient-name-and-measure` }>
              <li>{data[key]}</li>
              <li>{data[quant[index1]]}</li>
            </div>)))}
        </ol>
      </section>
    );
  }
}

IngredientsList.propTypes = {
  data: PropTypes.shape(Object).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default IngredientsList;
