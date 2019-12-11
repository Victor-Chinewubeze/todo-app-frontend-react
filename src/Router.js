import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ViewAll = lazy(() => import('./views/ViewAll'));
const ViewOne = lazy(() => import('./views/ViewOne'));
const CreateTask = lazy(() => import('./views/CreateTask'));
const EditTask = lazy(() => import('./views/EditTask'));


export default function Root() {
  return (
      <Router>
        <Suspense fallback="Please Wait ...">
          <Switch>
              <Route exact path="/" component={ViewAll}/>
              <Route exact path="/view-one" component={ViewOne}/>
          </Switch>
        </Suspense>
      </Router>
  );
}
