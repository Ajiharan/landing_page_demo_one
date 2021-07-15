import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
