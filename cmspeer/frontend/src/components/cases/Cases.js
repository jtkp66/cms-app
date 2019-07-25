import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCases } from "../../actions/cases";

class Cases extends Component {
  static propTypes = {
    cases: PropTypes.array.isRequired,
    getCases: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCases();
  }

  render() {
    return (
      <Fragment>
        <div className="col-md-6">
          <h4>Recent Cases</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Case</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cases.map(kase => (
                <tr key={kase.id}>
                  <td>{kase.id}</td>
                  <td>{kase.casenumber}</td>
                  <td>{kase.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cases: state.cases.cases
});

export default connect(
  mapStateToProps,
  { getCases }
)(Cases);
