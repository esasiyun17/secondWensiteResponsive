/* eslint-disable no-unused-vars */
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navi from "./component/Navi";
import "./index.css";
import Intro from "./component/Intro";
import Bottom from "./component/Bottom";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Intro />
            <Bottom />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
