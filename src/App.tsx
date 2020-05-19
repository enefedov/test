import React from 'react';
import './App.css';
import List from './app/page/list';
import Create from './app/page/create';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
            <Switch>
              <Route exact path="/" component={List} />
              <Route exact path="/create" component={Create} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
