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
