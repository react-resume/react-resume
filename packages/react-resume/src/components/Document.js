import React from "react";
import glamorous from "glamorous";
import defaultsDeep from "lodash/defaultsDeep";

const Main = glamorous.article({
  margin: "0 auto",
  maxWidth: "30em",
});

const THEME = {
  Document: {},
  HTML: {},
  Basics: {},
  Section: {
    Item: {},
  },
  References: {
    Item: {},
  },
};

export default class Document extends React.Component {
  static defaultProps = {
    theme: null,
  };

  static childContextTypes = {
    theme: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: defaultsDeep({}, THEME, props.theme || {}),
    };
  }

  getChildContext() {
    return { theme: this.state.theme };
  }

  render() {
    const { theme } = this.state;
    const { children, ...props } = this.props;
    return (
      <Main {...props} style={theme.Document}>
        {children}
      </Main>
    );
  }
}
