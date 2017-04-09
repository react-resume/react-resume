import React from "react";
import moment from "moment";

import { Section as S, H2, H3, H4, UL, LI, P } from "react-resume-core";

class Title extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <H2 style={{ ...theme.Section.Title, ...style }} {...props}>
        {children}
      </H2>
    );
  }
}

class Subtitle extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <H3 style={{ ...theme.Section.Subtitle, ...style }} {...props}>
        {children}
      </H3>
    );
  }
}

class ItemTitle extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <H4 style={{ ...theme.Section.Item.Title, ...style }} {...props}>
        {children}
      </H4>
    );
  }
}

class ItemLead extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <P style={{ ...theme.Section.Item.Lead, ...style }} {...props}>
        {children}
      </P>
    );
  }
}

class Summary extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <P style={{ ...theme.Section.Item.Summary, ...style }} {...props}>
        {children}
      </P>
    );
  }
}

class ItemPeriod extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

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
    const { theme } = this.context;
    const { style, start, end, format, ...props } = this.props;
    const content = this.renderContent(
      moment(start || null),
      moment(end || null),
      format
    );
    return (
      <P style={{ ...theme.Section.Item.Period, ...style }} {...props}>
        {content}
      </P>
    );
  }
}

class Highlights extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <UL style={{ ...theme.Section.Highlights, ...style }} {...props}>
        {children}
      </UL>
    );
  }
}

class Highlight extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <LI style={{ ...theme.Section.Highlight, ...style }} {...props}>
        {children}
      </LI>
    );
  }
}

class Item extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  static Title = ItemTitle;
  static Lead = ItemLead;
  static Highlight = Highlight;
  static Highlights = Highlights;

  static Period = ItemPeriod;
  static Summary = Summary;

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <LI style={{ ...theme.Section.Item, ...style }} {...props}>
        {children}
      </LI>
    );
  }
}

class Items extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <UL style={{ ...theme.Section.Items, ...style }} {...props}>
        {children}
      </UL>
    );
  }
}

export default class Section extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  static Items = Items;
  static Item = Item;
  static Title = Title;
  static Subtitle = Subtitle;

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <S style={{ ...theme.Section.Section, ...style }} {...props}>
        {children}
      </S>
    );
  }
}
