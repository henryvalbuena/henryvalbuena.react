import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Main";

const Blue = React.lazy(() => import("./Blue"));
const Red = React.lazy(() => import("./Red"));

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/red" component={Red} />
          <Route path="/blue" component={Blue} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
