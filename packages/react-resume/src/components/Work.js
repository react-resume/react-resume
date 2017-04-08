import React from "react";

import Section from "./Section";

class Item extends React.Component {
  static Company = Section.Item.Title;
  static Position = Section.Item.Lead;
  static Period = Section.Item.Period;
  static Summary = Section.Item.Summary;

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
