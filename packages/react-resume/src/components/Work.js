import React from "react";

import { A } from "react-resume-core";
import Section from "./Section";

class Website extends React.Component {
  render() {
    const { children, href, ...props } = this.props;
    return (
      <A href={href}>
        <Section.Item.Lead {...props}>
          {children || href}
        </Section.Item.Lead>
      </A>
    );
  }
}

class Item extends React.Component {
  static Company = Section.Item.Title;
  static Position = Section.Item.Lead;
  static Period = Section.Item.Period;
  static Summary = Section.Item.Summary;
  static Highlights = Section.Item.Highlights;
  static Highlight = Section.Item.Highlight;
  static Website = Website;

  render() {
    return <Section.Item {...this.props} />;
  }
}

export default class Work extends React.Component {
  static Title = Section.Title;
  static Items = Section.Items;
  static Item = Item;

  render() {
    const theme = this.props.theme || this.context.theme || {};
    return (
      <Section style={theme.work}>
        {this.props.children}
      </Section>
    );
  }
}
