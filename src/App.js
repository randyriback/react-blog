import React from "react";
import Nav from "./nav"
import Create from "./create"
import Home from "./home"
import NotFound from "./notfound"
import BlogDetails from "./blogdetails"
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
      <Router>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails /> 
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

export default App;