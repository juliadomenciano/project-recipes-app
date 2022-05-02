import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetailCard from '../components/RecipeDetailCard';
import { drinkDetails } from '../services/detailsRequestApi';

export default function DrinksDetails() {
  const [drinkDetailsData, setDrinkDetailsData] = useState();
  const path = useLocation().pathname;

  useEffect(() => {
    const pathId = path.replace('/drinks/', '');
    const apiRequest = async () => {
      const data = await drinkDetails(pathId);
      setDrinkDetailsData(await data);
    };
    apiRequest();
  }, [path]);

  console.log(drinkDetailsData);
  return (
    drinkDetailsData === undefined ? '' : (
      <>
        <div>DrinkDetails</div>
        <RecipeDetailCard
          foodOrDrink="drink"
          data={ drinkDetailsData.drinks[0] }
        />
      </>
    )
  );
}
