import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact patch="/" component={ Login } />
      {/* <Route exact patch="/foods" component={ Foods } />
      <Route exact patch="/drinks" component={ Drinks } />
      <Route exact patch="/explore" component={ Explore } />
      <Route exact patch="/explore/foods" component={ ExploreFoods } />
      <Route exact patch="/explore/drinks" component={ ExploreDrinks } />
      <Route exact patch="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
      <Route exact patch="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
      <Route exact patch="/explore/foods/nationalities" component={ ExploreFoodsNationalities } />
      <Route exact patch="/profile" component={ Profile } />
      <Route exact patch="/done-recipes" component={ DoneRecipes } />
      <Route exact patch="/favorite-recipes" component={ FavoriteRecipes } /> */}
    </Switch>
  );
}

export default App;
