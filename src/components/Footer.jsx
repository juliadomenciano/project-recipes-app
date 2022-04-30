import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import css from '../modules/Footer.module.css';

export default function Footer() {
  return (
    <footer className={ css.conteiner_footer } data-testid="footer">
      <Link to="/drinks">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
        >
          <img src={ drinkIcon } alt="Link para drinks" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
        >
          <img src={ exploreIcon } alt="Link para explorar" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          type="button"
          data-testid="food-bottom-btn"
          src={ mealIcon }
        >
          <img src={ mealIcon } alt="Link para foods" />
        </button>
      </Link>
    </footer>
  );
}
