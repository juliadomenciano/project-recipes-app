import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import DrinksDetails from './pages/DrinksDetails';
import DrinksInProgress from './pages/DrinksInProgress';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import FoodInProgress from './pages/FoodInProgress';
import Foods from './pages/Foods';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationalities }
      />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route
        exact
        path="/foods/:id/in-progress"
        component={ FoodInProgress }
      />
      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ DrinksInProgress }
      />
      <Route
        exact
        path="/foods/:id"
        component={ FoodDetails }
      />
      <Route
        exact
        path="/drinks/:id"
        component={ DrinksDetails }
      />
      <Route
        exact
        path="/explore/drinks/nationalities"
        component={ NotFound }
      />
    </Switch>
  );
}

export default App;
