import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Nav from "./component/Navbar"
import Home from './page/home'
import Webdesign from './page/website'
import Graphic from './page/graphic'
import Animation from './page/AniandMo'
import Activity from './page/activity';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/webdesign">
            <Webdesign />
          </Route>
          <Route path="/graphicdesign">
            <Graphic />
          </Route>
          <Route path="/animationandmodel">
            <Animation />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
        </Switch>
        {/* <Footer /> */} 
      </div>
    </Router>
  );
}

export default App;