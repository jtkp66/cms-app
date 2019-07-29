import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCase } from "../../actions/cases";

class Form extends Component {
  state = {
    casenumber: "",
    status: "",
    investigator: ""
  };

  static propTypes = {
    addCase: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { casenumber, status, investigator } = this.state;
    const cse = { casenumber, status, investigator };

    this.props.addCase(cse);
    this.setState({
      casenumber: "",
      status: "",
      investigator: ""
    });
  };

  render() {
    const { casenumber, status, investigator } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Case Information</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Case Number</label>
            <input
              className="form-control"
              type="text"
              name="casenumber"
              onChange={this.onChange}
              value={casenumber}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              className="form-control"
              type="text"
              name="status"
              onChange={this.onChange}
              value={status}
            />
          </div>
          <div className="form-group">
            <label>investigator</label>
            <input
              className="form-control"
              type="text"
              name="investigator"
              onChange={this.onChange}
              value={investigator}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addCase }
)(Form);
