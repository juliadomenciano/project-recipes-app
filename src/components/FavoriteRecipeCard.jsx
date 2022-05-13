import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../index.css';
import FavoriteButtonPage from './FavoriteButtonPage';

export default function FavoriteRecipeCard(props) {
  const { image, category, recipeName, nationality, id,
    index, alcoholic, foodOrDrink, setFavorite, favorite } = props;
  const [copied, setCopied] = useState(false);
  const threeSeconds = 3000;

  const shareRecipe = () => {
    copy(`http://localhost:3000/${foodOrDrink}/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, threeSeconds);
  };

  useEffect(() => {
    setFavorite(true);
  }, [favorite, setFavorite]);

  return (
    <section
      key={ index }
      className="favorite_item"
    >
      <Link to={ `/${foodOrDrink}/${id}` }>
        <img
          className="doneImg"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt="Imagem da receita"
        />
      </Link>

      <div className="favorite_info">
        {
          foodOrDrink === 'foods'
            ? (
              <p
                data-testid={ `${index}-horizontal-top-text` }
                className="info"
              >
                {`${nationality} - ${category}`}
              </p>
            )
            : (
              <p
                data-testid={ `${index}-horizontal-top-text` }
                className="info"
              >
                {alcoholic}
              </p>
            )
        }
        <Link to={ `/${foodOrDrink}/${id}` }>
          <h2
            data-testid={ `${index}-horizontal-name` }
            className="info_title"
          >
            {recipeName}
          </h2>
        </Link>
        <div className="social_info">
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            type="button"
            src={ shareIcon }
            onClick={ shareRecipe }
            className="button_share"
          >
            {
              copied
                ? <span>Link copied!</span>
                : <img src={ shareIcon } alt="ícone para compartilhar" />
            }
          </button>
          <FavoriteButtonPage
            data={ id }
            foodOrDrink={ foodOrDrink }
            setFavorite={ setFavorite }
            index={ index }
          />
        </div>
      </div>
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  recipeName: PropTypes.string,
  finishedData: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
}.isRequired;
