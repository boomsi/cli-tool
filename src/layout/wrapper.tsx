import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes, IRoutes } from '@/router';

function Wrapper() {
  return (
    <Switch>
      {routes.map((item: IRoutes) => {
        const { component, redirect, name, ...prop } = item;
        const C = React.lazy(() => import(`@/pages/${component}`));
        return redirect ? (
          <Route {...prop}>
            <Redirect to={redirect!} />
          </Route>
        ) : (
          <Route {...prop}>
            <React.Suspense fallback="loading...............">
              <C />
            </React.Suspense>
          </Route>
        );
      })}
    </Switch>
  );
}

export default Wrapper;
