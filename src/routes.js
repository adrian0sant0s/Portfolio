import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Project from "./containers/project";
import Contact from "./containers/contact";
import More from "./containers/more";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/more" component={More} />
      </Switch>
    </Router>
  );
}

export default Routes;
