export function handleRecipeDone(foodOrDrink, data) {
  const currentRecipe = foodOrDrink === 'food' ? {
    id: data.idMeal,
    type: 'comida',
    nationality: data.strArea ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: '',
    name: data.strMeal,
    image: data.strMealThumb,
    doneDate: '',
    tags: [data.strTags],
  } : {
    id: data.idDrink,
    type: 'bebida',
    nationality: data.strArea ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: data.strAlcoholic,
    name: data.strDrink,
    image: data.strDrinkThumb,
    doneDate: '',
    tags: [data.strTags],
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
