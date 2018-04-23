import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactSpeedometer from 'react-d3-speedometer';

export default class SpeedOfMe extends Component {
  render () {
    const {
      segments,
      textColor,
      startColor,
      endColor,
      needleColor,
      value,
      needleTransitionDuration,
      needleTransition,
      currentValueText
    } = this.props;

    return (
      <div id='react-speedofme'>
        <div className='gauge'>
          <ReactSpeedometer
            fluidWidth
            segments={segments}
            textColor={textColor}
            startColor={startColor}
            endColor={endColor}
            needleColor={needleColor}
            value={value}
            needleTransitionDuration={needleTransitionDuration}
            needleTransition={needleTransition}
            currentValueText={`${currentValueText}Mbps`}
          />
        </div>
        <div className='total-speed'>56.43Mbps</div>
      </div>
    );
  }
}
