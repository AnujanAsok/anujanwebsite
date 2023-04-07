import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import Experience from "./Experience";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/experiences">
            <Experience />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
