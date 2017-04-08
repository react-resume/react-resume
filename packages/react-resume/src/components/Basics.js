import React from "react";

import { Div, H1, P, A, UL, LI, Img } from "./HTML";
import { Summary } from "./Common";
import Section from "./Section";

class Name extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <Div>
        <H1 {...props}>
          {value}
          {children}
        </H1>
      </Div>
    );
  }
}

class Label extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <P {...props}>
        {value}
        {children}
      </P>
    );
  }
}

class Email extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <A href={`mailto:${value || children}`} {...props}>
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Phone extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <A href={`tel:${value || children}`} {...props}>
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Website extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <A href={`${value || children}`} {...props}>
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Location extends React.Component {
  render() {
    const { value, children, ...props } = this.props;
    return (
      <A href={`https://maps.google.com/?q=${value || children}`} {...props}>
        <P>
          {children || value}
        </P>
      </A>
    );
  }
}

class Picture extends React.Component {
  render() {
    return <Img {...this.props} />;
  }
}

class Profile extends React.Component {
  render() {
    const { network, username, url, children, ...props } = this.props;
    return (
      <LI {...props}>
        <A href={url || `https://${network}.com/${username}`}>
          {children || username}
        </A>
      </LI>
    );
  }
}

class Profiles extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <UL {...props}>
        {children}
      </UL>
    );
  }
}

export default class Basics extends React.Component {
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
    const { children, ...props } = this.props;
    return (
      <Section {...props}>
        {children}
      </Section>
    );
  }
}
