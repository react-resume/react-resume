import React from "react";

import { P } from "react-resume-core";

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
