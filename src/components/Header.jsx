import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import CSS from './Header.module.css';

export default function Header({ title }) {
  const searchPaths = ['/foods', '/drinks', '/explore/foods/nationalities'];
  const [showSearch, setShowSearch] = useState(false);
  const path = useLocation().pathname;

  return (
    <div className={ CSS.nav_conteiner }>
    <header>
      <Link to="/profile">
        {/* pq a imagem esta sendo passada no button? */}
        <button
          type="button"
          data-testid="profile-top-btn"
          className={ CSS.profile_button }
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="Ícone do perfil" />
        </button>
      </Link>
      <h1 className={ CSS.nav_title } data-testid="page-title">{title}</h1>
      <h1 data-testid="page-title">{ title }</h1>
      {
        searchPaths.includes(path)
        && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => { setShowSearch(!showSearch); } }

          >
            <img src={ searchIcon } alt="Lupa" />
          </button>
        )
      }
      {showSearch && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
