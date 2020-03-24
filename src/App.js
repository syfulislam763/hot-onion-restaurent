import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Breakfast from './components/Breakfast/Breakfast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error/Error';
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';
import ProductDetails from './components/ProductDetails/ProductDetails';



function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route exact path="/">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/details/:productId"> 
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
