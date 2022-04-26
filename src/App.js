import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodInProgress from './pages/FoodInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import FoodDetails from './pages/FoodDetails';
import DrinksDetails from './pages/DrinksDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact patch="/drinks" component={ Drinks } />
      <Route exact patch="/explore" component={ Explore } />
      <Route exact patch="/explore/foods" component={ ExploreFoods } />
      <Route exact patch="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        patch="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        patch="/explore/drinks/ingredients"
        com
        ponent={ ExploreDrinksIngredients }
      />
      <Route
        exact
        patch="/explore/foods/nationalities"
        component={ ExploreFoodsNationalities }
      />
      <Route exact patch="/done-recipes" component={ DoneRecipes } />
      <Route exact patch="/favorite-recipes" component={ FavoriteRecipes } />
      <Route
        exact
        path="/foods/{id-da-receita}/in-progress"
        component={ FoodInProgress }
      />
      <Route
        exact
        path="/drinks/{id-da-receita}/in-progress"
        component={ DrinksInProgress }
      />
      <Route
        exact
        path="/foods/{id-da-receita}"
        component={ FoodDetails }
      />
      <Route
        exact
        path="/drinks/{id-da-receita}"
        component={ DrinksDetails }
      />
    </Switch>
  );
}

export default App;
