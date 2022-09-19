export const foodDetails = async (recipeId) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  const data = await request.json();

  return data;
};

export const drinkDetails = async (recipeId) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  const data = await request.json();

  return data;
};
