import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AsyncApp, IntervalApp, MemoCompareApp, Home } from "./Apps";

import "./styles.scss";

export const App = () => {
  const links = [
    { to: "/", component: Home, linkName: "home" },
    { to: "/useAsync", component: AsyncApp, linkName: "useAsync" },
    { to: "/useInterval", component: IntervalApp, linkName: "useInterval" },
    {
      to: "/useMemoCompare",
      component: MemoCompareApp,
      linkName: "useMemoCompare",
    },
  ];
  return (
    <Router>
      <main className="app">
        <header>
          <h1>my-hooks</h1>
        </header>
        <nav>
          <ul>
            {links.map((x, index) => (
              <li key={`route-${index}`}>
                <Link to={x.to}>{x.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {links.map(({ to, component: Component }, index) => (
            <Route exact path={to} key={`route-app-${index}`}>
              <Component />
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
};
