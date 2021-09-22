import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/success/:id">
            <Success />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
