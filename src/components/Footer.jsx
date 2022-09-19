import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

// import css from '../modules/Footer.module.css';
import '../CSS/footer.css';

export default function Footer() {
  return (
    <footer className="conteiner_footer" data-testid="footer">
      <Link to="/drinks">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          className="drinks_bottom"
        >
          <img src={ drinkIcon } alt="Link para drinks" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          className="explore_bottom"
        >
          <img src={ exploreIcon } alt="Link para explorar" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          type="button"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          className="food_bottom"
        >
          <img src={ mealIcon } alt="Link para foods" />
        </button>
      </Link>
    </footer>
  );
}
