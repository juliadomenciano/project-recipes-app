export default function inProgressHelper(type) {
  const drinkKeys = ['strDrinkThumb', 'strDrink', 'strAlcoholic'];
  const mealKeys = ['strMealThumb', 'strMeal', 'strCategory'];
  const objKeys = type === 'foods' ? mealKeys : drinkKeys;
  return objKeys;
}
