import React, { Fragment } from "react";
import Form from "./Form";
import Agrisight from "./Agrisight";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Agrisight />
    </Fragment>
  );
}
