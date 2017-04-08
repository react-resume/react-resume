import React from "react";
import moment from "moment";
import styled from "styled-components";

import { H2, H3, UL, LI, Span, P, A } from "./HTML";

const Container = styled.div`

`;

class Items extends React.Component {
  render() {
    const { type, value, children, ...props } = this.props;
    return (
      <UL {...props}>
        {children}
      </UL>
    );
  }
}

class Item extends React.Component {
  render() {
    const { type, value, children, ...props } = this.props;
    return (
      <LI {...props}>
        {children}
      </LI>
    );
  }
}

class Title extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H2 {...props}>
        {children || "Work Experience"}
      </H2>
    );
  }
}

class Company extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H3 {...props}>
        {children}
      </H3>
    );
  }
}

class Position extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <Span {...props}>
        {children}
      </Span>
    );
  }
}

class Period extends React.Component {
  static defaultProps = {
    format: "MMMM, YYYY",
  };

  renderContent(start, end, format) {
    if (start.isValid() && end.isValid()) {
      return `${start.format(format)} - ${end.format(format)}`;
    } else if (end.isValid()) {
      return `Until ${end.format(format)}`;
    } else if (start.isValid()) {
      return `${start.format(format)} - Current`;
    } else {
      return null;
    }
  }

  render() {
    const { start, end, format, ...props } = this.props;
    const content = this.renderContent(
      moment(start || null),
      moment(end || null),
      format
    );
    return (
      <P {...props}>
        {content}
      </P>
    );
  }
}

class Description extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <P {...props}>
        {children}
      </P>
    );
  }
}

export default class Work extends React.Component {
  static Title = Title;
  static Items = Items;
  static Item = Item;
  static Company = Company;
  static Position = Position;
  static Period = Period;
  static Description = Description;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <Container style={theme.work}>
        {this.props.children}
      </Container>
    );
  }
}
