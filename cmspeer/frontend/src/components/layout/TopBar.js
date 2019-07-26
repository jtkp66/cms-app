import React from "react";

const TopBar = () => {
  return (
    <div>
      <section id="top-bar" className="p-3">
        <div className="container text-right">
          <div className="row">
            <div className="col-md-8">
              <i className="fas fa-phone" /> 1.888.555.5555
            </div>
            <div className="col-md-4">
              <a>Contact Us</a> | <a>Login</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBar;
