import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Landing from './landing/Langing'
import Home from './home/Home';
const App=() =>{
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route  path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App