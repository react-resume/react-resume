import React from "react";
import styled from "styled-components";

import { Div, H1 } from "./HTML";

export default class Name extends React.Component {
  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <Div>
        <H1 style={theme.h1}>
          {this.props.children}
        </H1>
      </Div>
    );
  }
}
