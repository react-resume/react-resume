import React from "react";
import glamorous from "glamorous";

const Main = glamorous.article({
  margin: "0 auto",
  maxWidth: "30em",
});

export default class Document extends React.Component {
  static defaultProps = {
    theme: {},
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <Main {...props}>
        {children}
      </Main>
    );
  }
}
