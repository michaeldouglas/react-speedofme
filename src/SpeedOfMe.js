import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactSpeedometer from 'react-d3-speedometer';

export default class SpeedOfMe extends Component {
  state = {
    percentDone: 0,
    velocity: 0,
    speedTextDownload: 'Speed test download in progress. Please wait...',
    speedTextUpload: 'Speed test upload in progress. Please wait...',
  };

  componentWillMount() {
    const {
      account,
      domainName,
      loadingTextDownload,
      loadingTextUpload,
    } = this.props;

    SomApi.account = account;
    SomApi.domainName = domainName;
    SomApi.onTestCompleted = this.onTestCompleted;
    SomApi.onError = this.onError;
    SomApi.onProgress = this.onProgress;
    SomApi.state = this;

    this.setState({
      speedTextDownload: loadingTextDownload,
      speedTextUpload: loadingTextUpload,
    });

    SomApi.startTest();
  }

  onTestCompleted(result) {
    this.state.download(
      result.download,
      result.latency,
      this.state,
      this.state.props,
    );

    this.state.upload(
      result.upload,
      result.latency,
      this.state,
      this.state.props,
    );

    let total = parseFloat(result.download) + parseFloat(result.upload);

    this.state.setState({
      velocity: total,
    });
  }

  onError(error) {
    console.log(error, 'ERROR');
  }

  onProgress(progress) {
    this.state.setState({
      percentDone: progress.percentDone * 2,
      velocity: progress.percentDone,
    });
  }

  download(download, latency, state, props) {
    let downloadInKB = download * 1024;
    let speedTextDownload;

    if (downloadInKB > 1000 && latency < 150) {
      speedTextDownload = props.textdownloadexcellent;
    } else if (downloadInKB > 600 && latency < 150) {
      speedTextDownload = props.textdownloadexcellent;
    } else if (downloadInKB > 300 && latency < 150) {
      speedTextDownload = props.textdownloadexcellent;
    } else if (downloadInKB > 350 && latency > 150) {
      speedTextDownload = props.textdownloadacceptable;
    } else if (downloadInKB > 250 && latency > 150) {
      speedTextDownload = props.textdownloadacceptable;
    } else if (downloadInKB > 150 && latency > 150) {
      speedTextDownload = props.textdownloadacceptable;
    }

    state.setState({
      speedTextDownload,
    });
  }

  upload(upload, latency, state, props) {
    let uploadInKB = upload * 1024;
    let speedTextUpload;

    if (uploadInKB > 1000 && latency < 150) {
      speedTextUpload = props.textuploadexcellent;
    } else if (uploadInKB > 600 && latency < 150) {
      speedTextUpload = props.textuploadexcellent;
    } else if (uploadInKB > 300 && latency < 150) {
      speedTextUpload = props.textuploadexcellent;
    } else if (uploadInKB > 350 && latency > 150) {
      speedTextUpload = props.textuploadacceptable;
    } else if (uploadInKB > 250 && latency > 150) {
      speedTextUpload = props.textuploadacceptable;
    } else if (uploadInKB > 150 && latency > 150) {
      speedTextUpload = props.textuploadacceptable;
    }

    state.setState({
      speedTextUpload,
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

    const {
      percentDone,
      velocity,
      speedTextDownload,
      speedTextUpload,
    } = this.state;

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
              <div className="total-speed">{velocity.toFixed(2)} Mbps</div>
              <div className="text-speed">{speedTextDownload}</div>
              <div className="text-speed">{speedTextUpload}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
