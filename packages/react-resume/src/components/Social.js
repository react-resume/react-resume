import React from "react";
import styled from "styled-components";

import { UL, LI } from "./Common";

class Item extends React.Component {
  render() {
    const { type, children, ...props } = this.props;
    return (
      <LI {...props}>
        {children || type}
      </LI>
    );
  }
}

export default class Social extends React.Component {
  static Item = Item;

  render() {
    const { ...props } = this.props;
    const theme = this.props.theme || this.context.theme || {};
    return (
      <UL style={theme.social} {...props}>
        {this.props.children}
      </UL>
    );
  }
}
