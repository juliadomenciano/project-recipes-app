import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';

// Iniciando o header

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/profile" component={ Profile } />
      {/* <Route exact patch="/drinks" component={ Drinks } />
      <Route exact patch="/explore" component={ Explore } />
      <Route exact patch="/explore/foods" component={ ExploreFoods } />
      <Route exact patch="/explore/drinks" component={ ExploreDrinks } />
      <Route exact patch="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
      <Route exact patch="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
      <Route exact patch="/explore/foods/nationalities" component={ ExploreFoodsNationalities } />
      <Route exact patch="/done-recipes" component={ DoneRecipes } />
      <Route exact patch="/favorite-recipes" component={ FavoriteRecipes } /> */}
    </Switch>
  );
}

export default App;
