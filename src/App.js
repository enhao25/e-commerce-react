import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomePage from './Component/HomePage/HomePage';
import ShopPage from '../src/Component/Shop/shop';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
