import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
export const ApplicationRouter = () => {
  return (
    <div className='flex flex-col h-screen justify-between mb-auto'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </div>
  );
};
