import PropTypes from 'prop-types';
import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const { data, foodOrDrink } = this.props;
    const onlyKeys = Object.keys(data);
    console.log(data.strMeasure1);
    const keysIngredient = onlyKeys.filter((key) => (
      key.match('strIngredient') && data[key] !== null
    ));
    console.log(keysIngredient);
    const quant = onlyKeys.filter((key) => (
      key.match('strMeasure') && data[key] !== null
    ));

    console.log(data[keysIngredient[1]]);
    return (
      <ol>
        {keysIngredient.map((key, index) => (
          foodOrDrink === 'food' ? (
            <div data-testid={ `${index}-ingredient-name-and-measure` }>
              <li key={ index }>{data[key]}</li>
              <li>{data[quant[index]]}</li>
            </div>
          ) : (
            <div data-testid={ `${index}-ingredient-name-and-measure` }>
              <li key={ index }>{data[key]}</li>
              <li>{data[quant[index]]}</li>
            </div>)
        ))}
      </ol>
    );
  }
}

IngredientsList.propTypes = {
  data: PropTypes.shape(Object).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default IngredientsList;
