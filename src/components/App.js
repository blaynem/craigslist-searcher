import React from 'react';
import { Route } from 'react-router-dom';

import Lists from './lists';
import SearchBar from './search_bar';
import ListItem from './list_item';

const App = () => (
  <div className="container">
    <Route exact path="/" component={Lists}/>
    <Route path="/lists/:city/:categoryId/:pid/:county?" component={ListItem} />
  </div>
)
export default App;