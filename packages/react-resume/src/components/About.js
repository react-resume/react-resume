import React from "react";
import styled from "styled-components";

import { Div, P } from "./Common";

export default class About extends React.Component {
  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <Div>
        <P style={theme.p}>
          {this.props.children}
        </P>
      </Div>
    );
  }
}
