import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <section id="showcase-inner" className="py-5 text-white">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h1 className="display-4">User Dashboard</h1>
                <p className="lead">Manage your BT Real Estate account</p>
              </div>
            </div>
          </div>
        </section>

        <section id="bc" className="mt-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="breadcrumb-item active"> Dashboard</li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="dashboard" className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Welcome John</h2>
                <p>
                  Here are the property listings that you have inquired about
                </p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Property</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>22</td>
                      <td>45 Drivewood Circle</td>
                      <td>
                        <a className="btn btn-light" href="#">
                          View Listing
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>43</td>
                      <td>22 Westbrook rd</td>
                      <td>
                        <a className="btn btn-light" href="#">
                          View Listing
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>12 Samson Ave</td>
                      <td>
                        <a className="btn btn-light" href="#">
                          View Listing
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
