# react-resume

Build your resumé/CV with React ✨

## Getting Started

Install the modules:

```sh
yarn add react-resume react-resume-themes react-resume-plugins
```

Boot application:

```js
import React, { Component } from 'react';
import Resume, {
  Basics,
  Work,
  Volunteer,
  References,
  Section,
} from 'react-resume';
import { Github } from "react-resume-plugins";
import * as themes from 'react-resume-themes';

export default class App extends Component {
  render() {
    return (
      <Resume theme={themes.bauer()}>
        <Basics>
          <Basics.Name>Patricio López J.</Basics.Name>
          <Basics.Label>Software Engineer.</Basics.Label>
          <Basics.Location>Av. Vicuña Mackenna 6100, Santiago</Basics.Location>
          <Basics.Email>patricio@lopezjuri.com</Basics.Email>
          <Basics.Website>lopezjuri.com</Basics.Website>
          <Basics.Phone>+56 9 87654321</Basics.Phone>
          <Basics.Summary>
            Rocket scientist, Software drawer, IT consultant and personal psychologist. Interested in state of the art technology and time-bomb hacks.
          </Basics.Summary>
          <Basics.Profiles>
            <Basics.Profile network="twitter" username="mrpatiwi" />
          <Basics.Profile network="linkedin" username="lopezjuri" />
          </Basics.Profiles>
        </Basics>
        <Work>
          <Work.Title>Work Experience</Work.Title>
          <Work.Items>
            <Work.Item>
              <Work.Item.Company>Mediastream</Work.Item.Company>
              <Work.Item.Position>Software Engineer</Work.Item.Position>
              <Work.Item.Website href="https://mediastre.am">Website</Work.Item.Website>
              <Work.Item.Period start="2016-12-01" end="2017-3-01" />
              <Work.Item.Summary>
                Full-time summer job developing Node.js and React and React-Native applications.
              </Work.Item.Summary>
              <Work.Item.Highlights bullets>
                <Work.Item.Highlight>Requirement gathering</Work.Item.Highlight>
                <Work.Item.Highlight>Design and setup with React and Redux</Work.Item.Highlight>
              </Work.Item.Highlights>
            </Work.Item>
          </Work.Items>
        </Work>
        <Section>
          <Section.Title>Experience</Section.Title>
          <Github username="mrpatiwi" host="https://78f34fc9.ngrok.io">
            <Github.Title />
            <Github.Projects />
          </Github>
        </Section>
        <Volunteer>
          <Volunteer.Title>Volunteer</Volunteer.Title>
          <Volunteer.Items>
            <Volunteer.Item>
              <Volunteer.Item.Company>Censo 2017</Volunteer.Item.Company>
              <Volunteer.Item.Position>Volunteer</Volunteer.Item.Position>
            <Volunteer.Item.Period start="2017-4-1" />
              <Volunteer.Item.Summary>
                Sign up for voluntering.
              </Volunteer.Item.Summary>
            </Volunteer.Item>
          </Volunteer.Items>
        </Volunteer>
        <References>
          <References.Title>References</References.Title>
          <References.Item>
            <References.Item.Quote>
              This guy is a genius, before meeting him I was coding in COBOL!
            </References.Item.Quote>
            <References.Item.Name>
              Nicolas Gebauer
            </References.Item.Name>
          </References.Item>
        </References>
      </Resume>
    );
  }
}
```
