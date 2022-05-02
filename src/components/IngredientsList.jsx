import PropTypes from 'prop-types';
import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const { data } = this.props;
    const onlyKeys = Object.keys(data);
    const mn = 9;
    console.log(onlyKeys);
    const quant = onlyKeys.filter((key) => (
      key.match('strMeasure') && data[key] !== ''
    ));

    return (
      <ol>
        {onlyKeys.map((key, index) => (
          key.match('strIngredient') && data[key] !== '' ? (
            <div data-testid={ `${index - mn}-ingredient-name-and-measure` }>
              <li key={ index }>{data[key]}</li>
              <li>{data[quant[index]]}</li>
            </div>
          ) : ''

        ))}
      </ol>
    );
  }
}

IngredientsList.propTypes = {
  data: PropTypes.shape(Object).isRequired,
};

export default IngredientsList;
