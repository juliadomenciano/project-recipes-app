import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const searchPaths = ['/foods', '/drinks', '/explore/foods/nationalities'];
  const [showSearch, setShowSearch] = useState(false);
  const path = useLocation().pathname;

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <header>
      <Link to="/profile">
        <button type="button" data-testid="profile-top-btn" src={ profileIcon }>
          <img src={ profileIcon } alt="Ícone do perfil" />
        </button>
      </Link>
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
