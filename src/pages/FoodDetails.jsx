import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetailCard from '../components/RecipeDetailCard';
import { foodDetails } from '../services/detailsRequestApi';

export default function FoodDetails() {
  const [foodDetailsData, setFoodDetailsData] = useState();
  const path = useLocation().pathname;

  useEffect(() => {
    const pathId = path.replace('/foods/', '');
    const apiRequest = async () => {
      const data = await foodDetails(pathId);
      setFoodDetailsData(await data);
    };
    apiRequest();
  }, [path]);

  console.log(foodDetailsData);
  return (
    foodDetailsData === undefined ? '' : (
      <>
        <div>FoodDetails</div>
        <RecipeDetailCard
          foodOrDrink="food"
          data={ foodDetailsData.meals[0] }
        />
      </>
    )

  );
}
