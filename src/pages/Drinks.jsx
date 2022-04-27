import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProfileContext from '../context/ProfileContext/ProfileContext';

export default function Drinks() {
  const {
    setFoodOrDrink,
  } = useContext(ProfileContext);

  useEffect(() => {
    setFoodOrDrink('drinks');
  }, []);

  return (
    <section>
      <Header />
    </section>
  );
}
