import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';

export default function Foods() {
  const {
    setFoodOrDrink,
  } = useContext(ProfileContext);

  useEffect(() => {
    setFoodOrDrink('food');
  }, []);

  return (
    <section>
      <Header title="Foods" />
      <Footer />
    </section>
  );
}
