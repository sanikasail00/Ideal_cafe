

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SignIn from "./components/SignIn";
import Home from "./components/Home"; // Assuming you have a Home component
// Import other components as needed

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;