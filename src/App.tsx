import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AsyncApp, IntervalApp, MemoCompareApp } from "./Apps";

export const App = () => {
  const links = [
    { to: "/useAsync", component: AsyncApp },
    { to: "/useInterval", component: IntervalApp },
    { to: "/useMemoCompare", component: MemoCompareApp },
  ];
  return (
    <Router>
      <main>
        <h1>my-hooks</h1>
        <nav>
          <ul>
            {links.map((x, index) => (
              <li key={`route-${index}`}>
                <Link to={x.to}>{x.to?.replace("/", "")}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {links.map(({ to, component: Component }, index) => (
            <Route path={to} key={`route-app-${index}`}>
              <Component />
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
};
