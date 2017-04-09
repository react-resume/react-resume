import React from "react";
import { Div, H4, UL, LI } from "react-resume-core";
import get from "lodash/get";
import sortBy from "lodash/sortBy";
import take from "lodash/take";

class Projects extends React.Component {
  render() {
    const { langs } = this.props;
    return (
      <UL bullets style={{ marginTop: 5 }}>
        {take(langs, 3).map(lang => (
          <LI key={lang.id}>{lang.name} - ⭐ {lang.stargazers_count}</LI>
        ))}
      </UL>
    );
  }
}

class Title extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <H4 style={{ marginBottom: 5 }} {...props}>{children || "Github"}</H4>
    );
  }
}

class ResumeGithub extends React.Component {
  static Title = Title;
  static Projects = Projects;

  static propTypes = {
    host: React.PropTypes.string,
    username: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    host: "http://localhost:4000",
  };

  static contextTypes = {
    theme: React.PropTypes.object,
  };

  state = {
    loading: true,
    langs: [],
  };

  componentWillMount() {
    const { host, username } = this.props;
    this.fetchFromGithub(host, username);
  }

  fetchFromGithub(host, username) {
    return fetch(`${host}/github?username=${username}`)
      .then(data => data.json())
      .then(data => {
        const langs = sortBy(data, "stargazers_count").reverse();
        this.setState({ langs, loading: false });
      });
  }

  render() {
    const { theme } = this.context;
    const { children, style, ...props } = this.props;

    return (
      <Div style={{ ...get(theme, ["Github", "Div"]), ...style }} {...props}>
        {children &&
          React.Children.map(children, child =>
            React.cloneElement(child, this.state))}
      </Div>
    );
  }
}

export default ResumeGithub;
