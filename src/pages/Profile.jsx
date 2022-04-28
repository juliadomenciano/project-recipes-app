import React, { /* useContext */ } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <section>
      <Header title="Profile" />
      <section>
        <h2 data-testid="profile-email">
          {userEmail && userEmail.email}
        </h2>
        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => { localStorage.clear(); } }
          >
            Logout
          </button>
        </Link>
      </section>
      <Footer />
    </section>
  );
}
