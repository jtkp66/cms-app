import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-success">
        <div className="container">
          <div className="col-xs-7 col-sm-5 colmd-4 col-lg-3">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand text-white" href="#">
                <h1>CMSPeer</h1>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
              <div
                className="collapse navbar-collapse bg-success"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white mt-2"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <h4>FEATURES</h4>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link text-white mt-2" href="#">
                      <h4>ABOUT US</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white mt-2" href="#">
                      <h4>PRICING</h4>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-white dropdown-toggle mt-2"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <h4>RESOURCES</h4>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-light ml-4 mt-3" href="#">
                      TRY NOW
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
