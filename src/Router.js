import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

const ViewAll = lazy(() => import('./views/ViewAll'));
const ViewOne = lazy(() => import('./views/ViewOne'));
const CreateTask = lazy(() => import('./views/CreateTask'));
const EditTask = lazy(() => import('./views/EditTask'));


export default function Root() {
  return (
    <Router>
      <Suspense fallback="Please Wait ...">
        <Switch>
          <div className="page">
            <Route exact path="/" component={ViewAll} />
            <Route exact path="/create" component={CreateTask} />
            <Route exact path="/view-one" component={ViewOne} />
            <Route exact path="/edit" component={EditTask} />
            <Navbar></Navbar>
          </div >
        </Switch>
      </Suspense>
    </Router >
  );
}
