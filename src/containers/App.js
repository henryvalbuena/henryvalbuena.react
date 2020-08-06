import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Main";

const Blue = React.lazy(() => import("./Blue"));
const Red = React.lazy(() => import("./Red"));

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Main} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/portfolio/red" component={Red} />
          <Route path="/portfolio/blue" component={Blue} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
