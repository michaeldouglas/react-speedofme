import React, { Component } from 'react';
import SpeedOfMe from './../dist/index';

import './app.scss';

export default class App extends Component {
  render () {
    return (
      <div id='app-speedofme'>
        <SpeedOfMe
          segments={2}
          textColor='#FFF'
          startColor='#F4552C'
          endColor='#F9F9F9'
          needleColor='#989898'
          value={333}
          needleTransitionDuration={4000}
          needleTransition='easeElastic'
          currentValueText='50'
        />
      </div>
    );
  }
}
