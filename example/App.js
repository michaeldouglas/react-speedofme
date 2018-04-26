import React, { Component } from 'react';
import { SpeedOfMe, preloadScript } from './../dist/index';

import './assets/app.scss';

class App extends Component {
  render () {
    return (
      <div id='app-speedofme'>
        <SpeedOfMe
          account=''
          domainName=''
          segments={2}
          textColor='#FFF'
          startColor='#F4552C'
          endColor='#F9F9F9'
          needleColor='#989898'
          needleTransitionDuration={4000}
          needleTransition='easeElastic'
          currentValueText='50'
          textdownloadexcellent='Velocidade de download execelente.'
          textdownloadacceptable='Velocidade de download aceitável.'
          textuploadexcellent='Velocidade de upload execelente.'
          textuploadacceptable='Velocidade de upload aceitável.'
          loadingTextDownload='Rodando teste de Download, por favor, aguarde...'
          loadingTextUpload='Rodando teste de Upload, por favor, aguarde...'
        />
      </div>
    );
  }
}

export default preloadScript(App);
