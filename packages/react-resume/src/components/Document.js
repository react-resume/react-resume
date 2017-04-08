import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Main = styled.article`
  margin: 0 auto;
  max-width: 30em;
`;

export default class Document extends React.Component {
  static defaultProps = {
    theme: {},
  };

  render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Main {...props}>
          {children}
        </Main>
      </ThemeProvider>
    );
  }
}
