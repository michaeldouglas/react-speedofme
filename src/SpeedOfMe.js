import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactSpeedometer from 'react-d3-speedometer';

export default class SpeedOfMe extends Component {
  state = {
    percentDone: 0,
    download: 0,
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

  onTestCompleted(testResult) {
    this.state.setState({
      download: testResult.download,
    });
  }

  onError(error) {
    console.log(error, 'ERROR');
  }

  onProgress(progress) {
    console.log(progress);
    this.state.setState({
      percentDone: progress.percentDone,
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
      speedText,
    } = this.props;

    const { percentDone, download } = this.state;

    return (
      <div id="react-speedofme">
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
        <div className="total-speed">{download} Mbps</div>
        <div className="text-speed">{speedText}</div>
      </div>
    );
  }
}
