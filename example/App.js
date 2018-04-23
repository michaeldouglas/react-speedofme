import React, { Component } from 'react';
import { SpeedOfMe, preloadScript } from './../dist/index';

import './assets/app.scss';

class App extends Component {
  render () {
    return (
      <div id='app-speedofme'>
        <SpeedOfMe
          account='SOM5ad8fe736ea7c'
          domainName='127.0.0.1'
          segments={2}
          textColor='#FFF'
          startColor='#F4552C'
          endColor='#F9F9F9'
          needleColor='#989898'
          needleTransitionDuration={4000}
          needleTransition='easeElastic'
          currentValueText='50'
          speedText='Velocidade Excelente'
        />
      </div>
    );
  }
}

export default preloadScript(App);
