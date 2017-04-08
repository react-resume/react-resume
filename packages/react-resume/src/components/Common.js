import React from "react";

import { P } from "./HTML";

export class Summary extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <P {...props}>
        {children}
      </P>
    );
  }
}
