import React, { Fragment } from "react";

import Cases from "./Cases";
import Signings from "./Signings";

export default function Dashboard() {
  return (
    <Fragment>
      <Cases />
      <Signings />
    </Fragment>
  );
}
