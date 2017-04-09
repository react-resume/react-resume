import React from "react";

const styles = {
  UL: {
    paddingLeft: 0,
  },
};

export class Section extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <section style={{ ...theme.HTML.Section, ...style }} {...props} />;
  }
}

export class H1 extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <h1 style={{ ...theme.HTML.H1, ...style }} {...props} />;
  }
}

export class H2 extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <h2 style={{ ...theme.HTML.H2, ...style }} {...props} />;
  }
}

export class H3 extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <h3 style={{ ...theme.HTML.H3, ...style }} {...props} />;
  }
}

export class H4 extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <h4 style={{ ...theme.HTML.H4, ...style }} {...props} />;
  }
}

export class H5 extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <h5 style={{ ...theme.HTML.H5, ...style }} {...props} />;
  }
}

export class Div extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <div style={{ ...theme.HTML.Div, ...style }} {...props} />;
  }
}

export class P extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <p style={{ ...theme.HTML.P, ...style }} {...props} />;
  }
}

export class Span extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <span style={{ ...theme.HTML.Span, ...style }} {...props} />;
  }
}

export class Blockquote extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return (
      <blockquote style={{ ...theme.HTML.Blockquote, ...style }} {...props} />
    );
  }
}

export class A extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <a style={{ ...theme.HTML.A, ...style }} {...props} />;
  }
}

export class UL extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, bullets, ...props } = this.props;
    return (
      <ul
        style={{
          ...theme.HTML.UL,
          ...(bullets
            ? undefined
            : {
                listStyleType: "none",
                listStyle: "none",
              }),
          ...styles.UL,
          ...style,
        }}
        {...props}
      />
    );
  }
}

export class LI extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <li style={{ ...theme.HTML.LI, ...style }} {...props} />;
  }
}

export class Img extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <img style={{ ...theme.HTML.Img, ...style }} {...props} />;
  }
}
