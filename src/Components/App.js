import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Menu from './recipes/Menu';
import AddColorForm from './colorForm/AddColorForm';
import StarRatings from './starRating/StarRatings'; 

const Home = () => <div className="home">Home</div>
export default () =>
<div className="app">
<BrowserRouter>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Home} />
    <Route path="/recipes" component={Menu} />
    <Route path="/color" component={AddColorForm} />
    <Route path="/rating" component={StarRatings} />
</BrowserRouter>
</div>
