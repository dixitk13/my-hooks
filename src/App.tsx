import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {
  UseAsyncApp,
  UseIntervalApp,
  UseLayoutEffectApp,
  UseMemoCompareApp,
  UsePreviousApp,
  Home,
} from "./Apps";
import { UseRenderCountApp } from "./Apps/UseRenderCountApp";
import { UseTogglerApp } from "./Apps/UseTogglerApp";

import "./styles.scss";

export const App = () => {
  // TODO: fix linkName and to text redundancy
  const links = [
    { to: "/", component: Home, linkName: "my-hooks" },
    { to: "/useAsync", component: UseAsyncApp, linkName: "useAsync" },
    {
      to: "/useInterval",
      component: UseIntervalApp,
      linkName: "useInterval",
    },
    {
      to: "/useLayoutEffect",
      component: UseLayoutEffectApp,
      linkName: "useLayoutEffect",
    },
    {
      to: "/usePrevious",
      component: UsePreviousApp,
      linkName: "usePrevious",
    },
    {
      to: "/useRenderCount",
      component: UseRenderCountApp,
      linkName: "useRenderCount",
    },
    {
      to: "/useToggler",
      component: UseTogglerApp,
      linkName: "useToggler",
    },
    {
      to: "/useMemoCompare",
      component: UseMemoCompareApp,
      linkName: "useMemoCompare",
    },
  ];

  return (
    <Router basename="my-hooks">
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
          {links.map(({ to, linkName, component: Component }, index) => (
            <Route exact path={to} key={`route-app-${index}`}>
              <article className="small-app">
                <h3>{linkName}</h3>
                <Component />
              </article>
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
};
