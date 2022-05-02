import React from 'react';
import PropTypes from 'prop-types';

class IngredientsList extends React.Component {
  render() {
    const { data } = this.props;
    const onlyKeys = Object.keys(data);
    console.log(onlyKeys);
    return (
      <ol>
        {onlyKeys.map((key) => (
          key.match('strIngredient') && data[key] !== '' ? <li>{data[key]}</li> : ''
        ))}
      </ol>
    );
  }
}

IngredientsList.propTypes = {
  data: PropTypes.shape(Object).isRequired,
};

export default IngredientsList;
