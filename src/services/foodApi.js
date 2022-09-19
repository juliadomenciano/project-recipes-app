export const foodApi = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await request.json();

  return data;
};

export const foodCategory = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await request.json();
  const numberFive = 5;
  const numberZero = 0;
  const firstFive = data.meals.slice(numberZero, numberFive);
  return firstFive;
};
