import React from 'react';
import { Link, useLocation, useEffect } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
// import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  useEffect(() => {}, []);

  return (
    <div>
      <Link to="/profile">
        <button type="button" data-testid="profile-top-btn" src={ profileIcon }>
          <img src={ profileIcon } alt="Ícone do perfil" />
        </button>
      </Link>
      <h1 data-testid="page-title">Header</h1>
      <button type="button" data-testid="search-top-btn">
        {/* <img src={ profileIcon } alt=/> */}
      </button>
    </div>
  );
}
