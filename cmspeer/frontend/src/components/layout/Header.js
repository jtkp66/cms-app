import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
        <span className="navbar-text mr-3">
          <Link to="/">
            <strong>
              <h4 className="text-white">Features</h4>
            </strong>
          </Link>
        </span>
        <span className="navbar-text mr-3">
          <Link to="/about">
            <strong>
              <h4 className="text-white">About Us</h4>
            </strong>
          </Link>
        </span>
        <span className="navbar-text mr-3">
          <Link to="/">
            <strong>
              <h4 className="text-white">Pricing</h4>
            </strong>
          </Link>
        </span>
        <span className="navbar-text mr-3">
          <Link to="/">
            <strong>
              <h4 className="text-white">Resources</h4>
            </strong>
          </Link>
        </span>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-success btn-outline-light btn-lg text-white"
          >
            TRY NOW
          </button>
        </li>
      </ul>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link text-white">
            Add Case
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Calendar
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Notifications
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Settings
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-success text-light mb-4">
        <div className="container mb-4 mt-4">
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
            <a className="navbar-brand" href="#">
              <h2 className="text-light">CMSPeer</h2>
            </a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
