import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

import "./styles.scss";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render= {(props)=> {
            return <Login {...props} setLoggedIn={setLoggedIn} />
          }} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
