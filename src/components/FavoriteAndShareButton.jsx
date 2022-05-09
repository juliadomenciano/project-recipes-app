import copy from 'clipboard-copy';
import PropTypes, { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import FavoriteButtonFalse from './FavoriteButtonFalse';
import FavoriteButtonTrue from './FavoriteButtonTrue';

function FavoriteAndShareButton(props) {
  const { setLinkCopied, data, foodOrDrink } = props;
  const threeSeconds = 3000;
  // const threeSeconds = 80000000;
  const [favorite, setFavorite] = useState();
  const notFavorite = !favorite;
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
  useEffect(() => {
    function isFavoriteRecipe() {
      const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const isFoodOrDrink = foodOrDrink === 'food' ? (
        isFavorite && isFavorite.find((key) => key.id === data.idMeal)
      ) : isFavorite && isFavorite.find((key) => key.id === data.idDrink);
      return isFoodOrDrink ? setFavorite(true) : setFavorite(false);
    }
    isFavoriteRecipe();
  }, [data.idMeal, data.idDrink, foodOrDrink, favorite]);

  console.log(favorite);
  return (
    foodOrDrink === 'food' ? (
      <div className="social_menu detail_page">
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareButtonFood(data.idMeal) }
          className="button_share"
        >
          compartilhar
        </button>
        { favorite && <FavoriteButtonTrue
          data={ data }
          foodOrDrink={ foodOrDrink }
          setFavorite={ setFavorite }
        /> }
        { notFavorite
          && <FavoriteButtonFalse
            setFavorite={ setFavorite }
            data={ data }
            foodOrDrink={ foodOrDrink }
          /> }
      </div>
    ) : (
      <div className="social_menu detail_page">
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShareButtonDrink(data.idDrink) }
          className="button_share"
        >
          compartilhar
        </button>
        { favorite && <FavoriteButtonTrue
          data={ data }
          foodOrDrink={ foodOrDrink }
          setFavorite={ setFavorite }
        /> }
        { notFavorite
          && <FavoriteButtonFalse
            setFavorite={ setFavorite }
            data={ data }
            foodOrDrink={ foodOrDrink }
          /> }
      </div>
    )
  );
}

FavoriteAndShareButton.propTypes = {
  data: PropTypes.shape(object),
  setLinkCopied: PropTypes.func,
}.isRequired;

export default FavoriteAndShareButton;
