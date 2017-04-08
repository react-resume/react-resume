import React from "react";
import moment from "moment";

import { Section as S, H2, H3, H4, UL, LI, P } from "./HTML";
import { Summary } from "./Common";

class Title extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H2 {...props}>
        {children}
      </H2>
    );
  }
}

class Subtitle extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H3 {...props}>
        {children}
      </H3>
    );
  }
}

class ItemTitle extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H4 {...props}>
        {children}
      </H4>
    );
  }
}

class ItemLead extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <P {...props}>
        {children}
      </P>
    );
  }
}

class ItemPeriod extends React.Component {
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

class Highlights extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <UL {...props}>
        {children}
      </UL>
    );
  }
}

class Highlight extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <LI {...props}>
        {children}
      </LI>
    );
  }
}

class Item extends React.Component {
  static Title = ItemTitle;
  static Lead = ItemLead;
  static Highlight = Highlight;
  static Highlights = Highlights;

  static Period = ItemPeriod;
  static Summary = Summary;

  render() {
    const { children, ...props } = this.props;
    return (
      <LI {...props}>
        {children}
      </LI>
    );
  }
}

class Items extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <UL {...props}>
        {children}
      </UL>
    );
  }
}

export default class Section extends React.Component {
  static Items = Items;
  static Item = Item;
  static Title = Title;
  static Subtitle = Subtitle;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <S style={theme.work}>
        {this.props.children}
      </S>
    );
  }
}
