import React from "react";
import styled from "styled-components";

// import { UL, LI } from "./Common";

class Item extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default class Info extends React.Component {
  static Item = Item;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <div style={theme.info}>
        {this.props.children}
      </div>
    );
  }
}
