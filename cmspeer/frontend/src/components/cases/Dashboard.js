import React, { Fragment } from "react";
import Moment from "react-moment";

import Cases from "./Cases";
import Signings from "./Signings";
import Form from "./Form";
import TopCards from "./TopCards";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <TopCards />
        <div className="col-md-6">
          <Cases />
          <Signings />
        </div>
        <div className="col-md-6">
          <Cases />
          <Signings />
        </div>
      </div>
      <Form />
    </div>
  );
}
