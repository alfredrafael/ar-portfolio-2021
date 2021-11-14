import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/1NavigationBar/1NavigationBar";
import Footer from "./components/ZFooter";
import Resume from "./components/Resume";
import $ from "jquery";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        {/* //////////////////////////////////////////////////////////////////////// */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} />

          <Route
            render={() => (
              <h2 style={{ paddingTop: "15%" }}>404 Page not found</h2>
            )}
          />
        </Switch>
        {/* //////////////////////////////////////////////////////////////////////// */}

        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
