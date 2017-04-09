import React from "react";

import { Blockquote, P } from "react-resume-core";
import Section from "./Section";

const styles = {
  Item: {
    listStyle: "none",
    fontStyle: "italic",
  },
  Name: {
    textAlign: "right",
  },
};

class Quote extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { children, style, props } = this.props;
    return (
      <Blockquote style={{ ...theme.References.Quote, ...style }} {...props}>
        {children}
      </Blockquote>
    );
  }
}

class Name extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { children, style, props } = this.props;
    return (
      <P
        style={{ ...theme.References.Name, ...styles.Name, ...style }}
        {...props}
      >
        {children}
      </P>
    );
  }
}

class Item extends React.Component {
  static Name = Name;
  static Quote = Quote;

  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { children, style, ...props } = this.props;
    return (
      <Section.Item
        style={{ ...theme.References.Item, ...styles.Item, ...style }}
        {...props}
      >
        {children}
      </Section.Item>
    );
  }
}

export default class References extends React.Component {
  static Title = Section.Title;
  static Items = Section.Items;
  static Item = Item;

  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { children, style, ...props } = this.props;
    return (
      <Section style={{ ...theme.References.References, ...style }} {...props}>
        {children}
      </Section>
    );
  }
}
