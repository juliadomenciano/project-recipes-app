export async function handleRecipeDone(foodOrDrink, recipeData) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${mm}/${dd}/${yyyy}`;

  const currentRecipe = foodOrDrink === 'food' ? {
    id: recipeData.idMeal,
    type: 'food',
    nationality: recipeData.strArea ? recipeData.strArea : '',
    category: recipeData.strCategory,
    alcoholicOrNot: '',
    name: recipeData.strMeal,
    image: recipeData.strMealThumb,
    doneDate: today,
    tags: [recipeData.strTags],
  } : {
    id: recipeData.idDrink,
    type: 'drink',
    nationality: recipeData.strArea ? recipeData.strArea : '',
    category: recipeData.strCategory,
    alcoholicOrNot: recipeData.strAlcoholic,
    name: recipeData.strDrink,
    image: recipeData.strDrinkThumb,
    doneDate: today,
    tags: recipeData.strTags ? recipeData.strTags : [],
  };
  const previousRecipes = JSON.parse(localStorage
    .getItem('doneRecipes')) ? JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) : '';
  /*   const newStorage = [...previousRecipes, currentRecipe]; */
  localStorage.setItem('doneRecipes', JSON
    .stringify([...previousRecipes, currentRecipe]));
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
