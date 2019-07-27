import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCases, deleteCase } from "../../actions/cases";

class Cases extends Component {
  static propTypes = {
    cases: PropTypes.array.isRequired,
    getCases: PropTypes.func.isRequired,
    deleteCase: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCases();
  }

  render() {
    return (
      <Fragment>
        <div className="col-md-6 mt-4">
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
              {this.props.cases.map(cse => (
                <tr key={cse.id}>
                  <td>{cse.id}</td>
                  <td>{cse.casenumber}</td>
                  <td>{cse.status}</td>
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
  { getCases, deleteCase }
)(Cases);
