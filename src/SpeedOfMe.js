import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactSpeedometer from 'react-d3-speedometer';

export default class SpeedOfMe extends Component {
  state = {
    percentDone: 0,
    download: 0,
    speedText: 'Speed test in progress. Please wait...',
  };

  componentWillMount() {
    SomApi.account = this.props.account;
    SomApi.domainName = this.props.domainName;
    SomApi.onTestCompleted = this.onTestCompleted;
    SomApi.onError = this.onError;
    SomApi.onProgress = this.onProgress;
    SomApi.state = this;
    SomApi.startTest();
  }

  onTestCompleted(result) {
    let uploadInKB = result.upload * 1024;

    this.state.download(result.download, this.state);

    this.state.setState({
      download: result.download,
    });
  }

  onError(error) {
    console.log(error, 'ERROR');
  }

  onProgress(progress) {
    this.state.setState({
      percentDone: progress.percentDone * 2,
      download: progress.percentDone,
    });
  }

  download(download, state) {
    let downloadInKB = download * 1024;
    let speedText;

    if (downloadInKB > 1000) {
      speedText = 'Velocidade Execelente';
    } else if (downloadInKB > 600) {
      speedText = 'Velocidade Execelente';
    } else if (downloadInKB > 300) {
      speedText = 'Velocidade Execelente';
    }

    state.setState({
      speedText,
    });
  }

  render() {
    const {
      segments,
      textColor,
      startColor,
      endColor,
      needleColor,
      needleTransitionDuration,
      needleTransition,
      currentValueText,
    } = this.props;

    const { percentDone, download, speedText } = this.state;

    return (
      <div id="react-speedofme">
        <div className="card">
          <div className="gauge">
            <ReactSpeedometer
              fluidWidth
              segments={segments}
              textColor={textColor}
              startColor={startColor}
              endColor={endColor}
              needleColor={needleColor}
              value={percentDone}
              needleTransitionDuration={needleTransitionDuration}
              needleTransition={needleTransition}
              currentValueText={`${currentValueText}Mbps`}
            />
          </div>
        </div>
        <div className="card">
          <div className="total-box flex-total-centered">
            <div className="total">
              <div className="total-speed">{download} Mbps</div>
              <div className="text-speed">{speedText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
