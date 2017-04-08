import React from "react";
import styled from "styled-components";

import { Div, H2 } from "./HTML";

class Title extends React.Component {
  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <H2 style={theme.h2}>
        {this.props.children}
      </H2>
    );
  }
}

export default class Section extends React.Component {
  static Title = Title;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <Div style={theme.section}>
        {this.props.children}
      </Div>
    );
  }
}
