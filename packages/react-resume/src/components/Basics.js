import React from "react";

import { Div, H1, P, A, UL, LI, Img } from "./HTML";
import { Summary } from "./Common";
import Section from "./Section";

class Name extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <Div>
        <H1 style={{ ...theme.Basics.Name, ...style }} {...props}>
          {value}
          {children}
        </H1>
      </Div>
    );
  }
}

class Label extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <P style={{ ...theme.Basics.Label, ...style }} {...props}>
        {value}
        {children}
      </P>
    );
  }
}

class Email extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <A
        style={{ ...theme.Basics.Email, ...style }}
        href={`mailto:${value || children}`}
        {...props}
      >
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Phone extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <A
        style={{ ...theme.Basics.Phone, ...style }}
        href={`tel:${value || children}`}
        {...props}
      >
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Website extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <A
        style={{ ...theme.Basics.Website, ...style }}
        href={`${value || children}`}
        {...props}
      >
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Location extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { value, children, style, ...props } = this.props;
    return (
      <A
        style={{ ...theme.Basics.Location, ...style }}
        href={`https://maps.google.com/?q=${value || children}`}
        {...props}
      >
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Picture extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, ...props } = this.props;
    return <Img style={{ ...theme.Basics.Picture, ...style }} {...props} />;
  }
}

class Profile extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, network, username, url, children, ...props } = this.props;
    return (
      <LI {...props}>
        <A
          style={{ ...theme.Basics.Profile, ...style }}
          href={url || `https://${network}.com/${username}`}
        >
          {children || username}
        </A>
      </LI>
    );
  }
}

class Profiles extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <UL style={{ ...theme.Basics.Profiles, ...style }} {...props}>
        {children}
      </UL>
    );
  }
}

export default class Basics extends React.Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  static Summary = Summary;

  static Name = Name;
  static Label = Label;
  static Picture = Picture;
  static Email = Email;
  static Phone = Phone;
  static Website = Website;
  static Location = Location;

  static Profile = Profile;
  static Profiles = Profiles;

  render() {
    const { theme } = this.context;
    const { style, children, ...props } = this.props;
    return (
      <Section style={{ ...theme.Basics.Basics, ...style }} {...props}>
        {children}
      </Section>
    );
  }
}
