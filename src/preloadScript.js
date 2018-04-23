import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getDisplayName from 'react-display-name';
import scriptjs from 'scriptjs';

const DEFAULT_SCRIPT_URL = '//speedof.me/api/api.js';

/*
Preload Script based in logic: https://github.com/aiham/opentok-react/blob/de633fab81856f12ee71b0c5ba0c739d6680c180/src/preloadScript.js
*/

export default function preloadScript(InnerComponent) {
  class PreloadScript extends Component {
    constructor(props) {
      super(props);

      this.state = {
        scriptLoaded: typeof SomApi !== 'undefined',
      };
      this.isPresent = false;
    }
    componentDidMount() {
      this.isPresent = true;

      if (this.scriptLoading || this.state.scriptLoaded) {
        return;
      }

      this.scriptLoading = true;

      const scriptUrl = this.props.speedofmeClientUrl;
      scriptjs(scriptUrl, this.onScriptLoad);
    }
    componentWillUnmount() {
      this.isPresent = false;
    }
    onScriptLoad = () => {
      if (this.isPresent) {
        this.setState({ scriptLoaded: true });
      }
    };
    render() {
      const { speedofmeClientUrl, loadingDelegate } = this.props;
      console.log(this.props);
      if (this.state.scriptLoaded) {
        return <InnerComponent />;
      }

      return loadingDelegate;
    }
  }
  PreloadScript.displayName = `preloadScript(${getDisplayName(
    InnerComponent,
  )})`;
  PreloadScript.propTypes = {
    speedofmeClientUrl: PropTypes.string,
    loadingDelegate: PropTypes.node,
  };
  PreloadScript.defaultProps = {
    speedofmeClientUrl: DEFAULT_SCRIPT_URL,
    loadingDelegate: <div />,
  };

  return PreloadScript;
}
