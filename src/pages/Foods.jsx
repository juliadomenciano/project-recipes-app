import React, { useContext, useEffect } from 'react';
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
      <Header />
    </section>
  );
}
