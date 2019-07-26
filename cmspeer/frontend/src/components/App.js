import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./cases/Dashboard";
import About from "./layout/About";

import { Provider } from "react-redux";
import store from "../store";
import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <TopBar />
          <Header />
          <About />
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
