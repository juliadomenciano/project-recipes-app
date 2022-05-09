import PropTypes from 'prop-types';
import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const { data, foodOrDrink } = this.props;
    const onlyKeys = data && Object.keys(data);
    const keysIngredientDrink = onlyKeys && onlyKeys.filter((key) => (
      key.match('strIngredient') && data[key] !== null
    ));
    const keysIngredientFood = onlyKeys && onlyKeys.filter((key) => (
      key.match('strIngredient') && data[key] !== ''
    ));
    const quant = onlyKeys && onlyKeys.filter((key) => (
      key.match('strMeasure') && data[key] !== null
    ));
    return (
      <section className="conteiner_ingredientes">
        <h2>Ingredients</h2>
        <ul className="list">
          { foodOrDrink === 'food' ? (keysIngredientFood.map((key, index) => (
            <li
              className="ingredient_name_and_measure"
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              <span className="ingredient">{data[key]}</span>
              <span className="divider"> </span>
              <span className="amount">{data[quant[index]]}</span>
            </li>
          ))) : (keysIngredientDrink.map((key, index1) => (
            <li
              className="ingredient_name_and_measure"
              key={ index1 }
              data-testid={ `${index1}-ingredient-name-and-measure` }
            >
              <span className="ingredient">{data[key]}</span>
              <span className="divider"> </span>
              <span className="amount">{data[quant[index1]]}</span>
            </li>)))}
        </ul>
      </section>
    );
  }
}

IngredientsList.propTypes = {
  data: PropTypes.shape(Object).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default IngredientsList;
