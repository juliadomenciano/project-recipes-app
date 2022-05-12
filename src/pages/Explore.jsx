import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../CSS/page_explore.css';

export default function Explore() {
  return (
    <section className="container_page_explore">
      <Header title="Explore" />
      <div className="container_explore">
        <Link to="explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            <span>Explore Foods</span>
          </button>
        </Link>
        <Link to="explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            <span>Explore Drinks</span>
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
