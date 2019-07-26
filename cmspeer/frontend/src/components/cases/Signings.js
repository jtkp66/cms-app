import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getCases, deleteCase } from "../../actions/cases";

class Signings extends Component {
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
        <div className="col-md-6">
          <h4>Signings</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Case</th>
                <th>Investigator</th>
                <th>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cases.map(cse => (
                <tr key={cse.id}>
                  <td>{cse.casenumber}</td>
                  <td>{cse.investigator}</td>
                  <td>
                    {" "}
                    <Moment format="YYYY/MM/DD">{cse.assigned_date}</Moment>
                  </td>
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
)(Signings);
