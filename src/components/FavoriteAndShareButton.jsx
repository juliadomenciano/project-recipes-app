import copy from 'clipboard-copy';
import PropTypes, { object } from 'prop-types';
import React from 'react';

function FavoriteAndShareButton(props) {
  const { setLinkCopied, data, foodOrDrink } = props;
  const threeSeconds = 3000;
  function handleShareButtonFood(id) {
    copy(`http://localhost:3000/foods/${id}`);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, threeSeconds);
  }
  function handleShareButtonDrink(id) {
    copy(`http://localhost:3000/drinks/${id}`);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, threeSeconds);
  }
  return (
    foodOrDrink === 'food' ? (
      <>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareButtonFood(data.idMeal) }
        >
          compartilhar
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ () => console.log('') }
        >
          favoritar
        </button>
      </>
    ) : (
      <>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareButtonDrink(data.idDrink) }
        >
          compartilhar
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ () => console.log('') }
        >
          favoritar
        </button>
      </>
    )
  );
}

FavoriteAndShareButton.propTypes = {
  data: PropTypes.shape(object),
  setLinkCopied: PropTypes.func,
}.isRequired;

export default FavoriteAndShareButton;
