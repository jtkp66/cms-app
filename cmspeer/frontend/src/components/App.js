import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import PrivateRoute from "./common/PrivateRoute";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";

import Header from "./layout/Header";
import Dashboard from "./cases/Dashboard";
import About from "./layout/About";
import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import { Provider } from "react-redux";
import store from "../store";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <TopBar />
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
