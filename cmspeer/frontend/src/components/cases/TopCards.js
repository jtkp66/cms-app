import React from "react";

function TopCards() {
  return (
    <div>
      <div className="card-columns">
        <div className="card border-success mt-4">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the second card</p>
          </div>
        </div>
        <div className="card border-success mt-4">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the third card</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fourth card</p>
          </div>
        </div>
        <div className="card border-success mt-4">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fifth card</p>
          </div>
        </div>
        <div className="card border-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the sixth card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
