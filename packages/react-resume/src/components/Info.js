import React from "react";
import styled from "styled-components";

import { UL, LI, A } from "./Common";

class Item extends React.Component {
  static convert(type, argument) {
    switch (type) {
      case "email":
        return `mailto:${argument}`;
      case "phone":
        return `tel:${argument}`;
      case "address":
        return `http://maps.google.com/?q=${argument}`;
      default:
        return argument;
    }
  }

  render() {
    const { type, value, children, ...props } = this.props;
    return (
      <LI {...props}>
        <A href={Item.convert(type, value || children)}>
          {children}
        </A>
      </LI>
    );
  }
}

export default class Info extends React.Component {
  static Item = Item;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <UL style={theme.info}>
        {this.props.children}
      </UL>
    );
  }
}
