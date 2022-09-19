import React, { /* useContext */ } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../CSS/page_profile.css';

export default function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <section className="container_profile">
      <Header title="Profile" />
      <section className="profile">
        <h2 data-testid="profile-email">
          {userEmail && userEmail.email}
        </h2>
        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
            className="done_recipes"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            className="favorite_recipes"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => { localStorage.clear(); } }
            className="logout"
          >
            Logout
          </button>
        </Link>
      </section>
      <Footer />
    </section>
  );
}
