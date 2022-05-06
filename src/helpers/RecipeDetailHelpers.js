import { foodDetails, drinkDetails } from '../services/detailsRequestApi';

export async function handleRecipeDone(foodOrDrink, id) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${mm}/${dd}/${yyyy}`;

  let data = {};
  if (foodOrDrink === 'food') {
    data = await foodDetails(id);
  } else {
    data = await drinkDetails(id);
  }
  const currentRecipe = foodOrDrink === 'food' ? {
    id: data.meals[0].idMeal,
    type: 'comida',
    nationality: data.meals[0].strArea ? data.meals[0].strArea : '',
    category: data.meals[0].strCategory,
    alcoholicOrNot: '',
    name: data.meals[0].strMeal,
    image: data.meals[0].strMealThumb,
    doneDate: today,
    tags: [data.meals[0].strTags],
  } : {
    id: data.drinks[0].idDrink,
    type: 'bebida',
    nationality: data.drinks[0].strArea ? data.drinks[0].strArea : '',
    category: data.drinks[0].strCategory,
    alcoholicOrNot: data.drinks[0].strAlcoholic,
    name: data.drinks[0].strDrink,
    image: data.drinks[0].strDrinkThumb,
    doneDate: today,
    tags: data.drinks[0].strTags ? data.drinks[0].strTags : [],
  };
  const previousRecipes = JSON.parse(localStorage
    .getItem('doneRecipes')) ? JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) : '';
  const newStorage = [...previousRecipes, currentRecipe];
  localStorage.setItem('doneRecipes', JSON.stringify(newStorage));
}

export function handleStartRecipe(foodOrDrink, id, ingredientList, history) {
  const localStorageObj = JSON.parse(localStorage.getItem('inProgressRecipes')) ? (
    JSON.parse(localStorage.getItem('inProgressRecipes'))) : '';
  const { cocktails, meals } = localStorageObj;
  const currentRecipe = foodOrDrink === 'food' ? {
    meals: {
      ...meals,
      [id]: ingredientList,
    },
    cocktails: {
      ...cocktails,
    },
  } : {
    meals: {
      ...meals,
    },
    cocktails: {
      [id]: ingredientList,
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(currentRecipe));
  return foodOrDrink === 'food' ? history.push(`/foods/${id}/in-progress`) : (
    history.push(`/drinks/${id}/in-progress`));
}

export function handleContinueRecipe(foodOrDrink, id, history) {
  return foodOrDrink === 'food' ? history.push(`/foods/${id}/in-progress`) : (
    history.push(`/drinks/${id}/in-progress`));
}

export function handleFavoriteRecipe(data, foodOrDrink) {
  const favorite = foodOrDrink === 'food' ? (
    {
      id: data.idMeal,
      type: 'food',
      nationality: data.strArea,
      category: data.strCategory,
      alcoholicOrNot: '',
      name: data.strMeal,
      image: data.strMealThumb,
    }
  ) : (
    {
      id: data.idDrink,
      type: 'drink',
      nationality: '',
      category: data.strCategory,
      alcoholicOrNot: data.strAlcoholic,
      name: data.strDrink,
      image: data.strDrinkThumb,
    }
  );
  const previousRecipes = JSON.parse(localStorage
    .getItem('favoriteRecipes')) ? JSON.parse(
      localStorage.getItem('favoriteRecipes'),
    ) : '';
  const newStorage = [...previousRecipes, favorite];
  localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
}

export function handleRemoveFavorite(data, foodOrDrink) {
  const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const isFoodOrDrink = foodOrDrink === 'food' ? (
    isFavorite && isFavorite.filter((key) => key.id !== data.idMeal)
  ) : isFavorite && isFavorite.filter((key) => key.id !== data.idDrink);
  console.log(isFoodOrDrink);
  localStorage.setItem('favoriteRecipes', JSON.stringify(isFoodOrDrink));
}
