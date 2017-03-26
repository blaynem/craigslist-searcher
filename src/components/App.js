import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Lists from './lists';
import SearchBar from './search_bar';
// import Test2 from './test2';
// import Topics from './topics';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Route exact path="/" component={Lists}/>
      </div>
    );
  }
}
        // <h2><Link to="/">Home</Link></h2>
        // <h2><Link to="/test2">Test 2 Link</Link></h2>
        // <h2><Link to="/topics">topics</Link></h2>
        // <Route path="/test2" component={Test2}/>
        // <Route path="/topics" component={Topics}/>
