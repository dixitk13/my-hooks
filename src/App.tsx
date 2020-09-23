import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AsyncApp, MemoCompareApp } from "./Apps";

export const App = () => {
  return (
    <Router>
      <div>
        <h1>my-hooks</h1>
        <nav>
          <ul>
            <li>
              <Link to="/useAsync">useAsync</Link>
            </li>
            <li>
              <Link to="/useMemoCompare">useMemoCompare</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/useAsync">
            <AsyncApp />
          </Route>
          <Route path="/useMemoCompare">
            <MemoCompareApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
