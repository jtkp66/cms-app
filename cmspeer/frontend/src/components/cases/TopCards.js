import React from "react";

function TopCards() {
  return (
    <div>
      <div className="card-columns">
        <div className="card border-success mt-4">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>OPEN CASES</strong>
            </p>
            <p className="card-text">45</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>PENDING LEADS</strong>
            </p>
            <p className="card-text">112</p>
          </div>
        </div>
        <div className="card border-success mt-4">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>NEW MESSAGES</strong>
            </p>
            <p className="card-text">7</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>SIGNING</strong>
            </p>
            <p className="card-text">25</p>
          </div>
        </div>
        <div className="card border-success mt-4">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>OPEN TASK</strong>
            </p>
            <p className="card-text">121</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-left">
            <p className="card-text text-success">
              <strong>RETAINED</strong>
            </p>
            <p className="card-text">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
