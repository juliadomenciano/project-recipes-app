import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import CSS from './Header.module.css';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const searchPaths = ['/foods', '/drinks', '/explore/foods/nationalities'];
  const [showSearch, setShowSearch] = useState(false);
  const path = useLocation().pathname;

  return (
    <header className={ CSS.nav_conteiner }>
      <Link to="/profile">
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
            className={ CSS.magnifying_button }
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
