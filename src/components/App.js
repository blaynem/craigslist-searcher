import React from 'react';
import { Route } from 'react-router-dom';

import Lists from './lists';
import SearchBar from './search_bar';
import ListItem from './list_item';
// import Test2 from './test2';
// import Topics from './topics';

const App = () => (
  <div>
    <SearchBar />
    <Route exact path="/" component={Lists}/>
    <Route path="/lists/:city/:pid/:county" component={ListItem} />
  </div>
)
        // <h2><Link to="/">Home</Link></h2>
        // <h2><Link to="/test2">Test 2 Link</Link></h2>
        // <h2><Link to="/topics">topics</Link></h2>
        // <Route path="/test2" component={Test2}/>
        // <Route path="/topics" component={Topics}/>
export default App;