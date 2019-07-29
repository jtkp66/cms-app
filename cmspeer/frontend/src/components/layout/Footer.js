import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-success mt-4">
        <div className="bg-success">
          <div className="row">
            <div className="col-xs-6 col-xs-offset-0 col-sm-3">
              <div className=" container text-light">
                <a href="/" className="btn text-light mt-4">
                  <h2> CMSPeer</h2>
                </a>

                <p>
                  1201 Eagle Ave, Suite 230
                  <br />
                  "NewPort Beach, CA 92660"
                </p>
                <div className="clear twenty" />
                <p className="mt-4">
                  info@cmspeer.com
                  <br />
                  619.964.9086
                  <br />
                  888.888.4436 toll free
                </p>
                <div className="clear twenty" />
              </div>
            </div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-3 text-white">
              <div className=" container textwidget custom-html-text-widget text-white">
                <a href="/" className="btn text-white">
                  <h4 className="mt-4">FEATURES</h4>
                </a>
                <ul className="list-unstyled">
                  <li>Cases</li>
                  <li>Intake</li>
                  <li>Client Communication</li>
                  <li>Tasks</li>
                  <li>Events</li>
                  <li>Documents</li>
                  <li>Negotiations</li>
                  <li>Litigation</li>
                  <li>Search</li>
                  <li>Costs</li>
                  <li>Timeline</li>
                  <li>Permissions</li>
                  <li>Reports</li>
                  <li>Security</li>
                  <li>Support</li>
                </ul>
                <div className="clear twenty" />
              </div>
            </div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-3 text-white">
              <div className=" container textwidget custom-html-text-widget text-white">
                <a href="/" className="btn text-white">
                  <h4 className="mt-4">RESOURCES</h4>
                </a>
                <ul className="list-unstyled">
                  <li>Pricing</li>
                  <li>Help Center</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
                <h4>EVENTS</h4>
                <ul className="list-unstyled">
                  <li>AAJ Annual Convention</li>
                  <li>2019</li>
                  <li>CAALA Vegas 2019</li>
                  <li>Lanier 4.0</li>
                  <li>2019 ATAA Anual Symposium</li>
                </ul>
                <div className="clear twenty" />
              </div>
            </div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-3 mt-2 text-white">
              <div className=" container">
                <h4 className="mt-4">STAY IN TOUCH</h4>
                <form>
                  <div className="form-group">
                    <small
                      id="emailHelp"
                      className="form-text text-white text-right"
                    >
                      <span className="text-danger">*</span>indicates required
                    </small>
                    <label>
                      <span className="text-danger">*</span> Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="password"
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="password"
                      className="form-control"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </div>

                  <button type="submit" className="btn btn-light text-success">
                    Subscribe
                  </button>
                </form>
                <div className="clear twenty" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
