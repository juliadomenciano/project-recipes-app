import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

import '../CSS/header.css';

export default function Header({ title }) {
  const searchPaths = ['/foods', '/drinks', '/explore/foods/nationalities'];
  const [showSearch, setShowSearch] = useState(false);
  const path = useLocation().pathname;

  return (
    // <header className={ CSS.nav_conteiner }>
    <header className="nav_conteiner">
      <Link to="/profile">
        <button
          type="button"
          data-testid="profile-top-btn"
          className="profile_button"
          src={ profileIcon }
        >
          {/* <img src={ profileIcon } alt="Ícone do perfil" /> */}
        </button>
      </Link>

      <dir className="container_header_title_app">
        <h1 className="header_title_app">
          easy
          <strong>cooking</strong>
        </h1>
      </dir>

      <h1 className="nav_title" data-testid="page-title">{title}</h1>
      {
        searchPaths.includes(path)
        && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            className="magnifying_button"
            onClick={ () => { setShowSearch(!showSearch); } }

          >
            {/* <img src={ searchIcon } alt="Lupa" /> */}
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
