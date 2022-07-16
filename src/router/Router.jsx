import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Router path="*">
        <Page404 />
      </Router>
      {
        //pathが全てに当てはまらない時Page404を返す
      }
    </Switch>
  );
};
