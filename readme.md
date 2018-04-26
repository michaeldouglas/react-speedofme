# React SpeedOf.Me Component

react-speedofme is a react component for use the API Speed Of Me

[![Build Status](https://travis-ci.org/michaeldouglas/react-speedofme.svg?branch=master)](https://travis-ci.org/michaeldouglas/react-speedofme)
[![GitHub license](https://img.shields.io/github/license/michaeldouglas/react-speedofme.svg)](https://github.com/michaeldouglas/react-speedofme/blob/master/license.md)
[![GitHub issues](https://img.shields.io/github/issues/michaeldouglas/react-speedofme.svg)](https://github.com/michaeldouglas/react-speedofme/issues)


[![NPM](https://nodei.co/npm/react-speedofme.png)](https://nodei.co/npm/react-speedofme/)

## Usage:

**NPM:**
`npm install --save react-speedofme`

**Yarn:**
`yarn add react-speedofme`

```javascript
// import the component
import { SpeedOfMe, preloadScript } from "react-speedofme";
// and just use it
<SpeedOfMe/>
```

## Creating Account and configuring SpeedOf.Me API

 - Create your account it's here [Register](https://speedof.me/api/user/register.php) 
 - After create a account configure your domain here: [Configure Domain](https://speedof.me/api/user/user_settings.php) 

## Configuration Options:

| prop        | type           | default  | comments |
| ------------|:--------------:| --------:| ---------|
| segments    | number         | 5        | Number of segments in the speedometer         |
| textColor | string         | #666     | Should be a valid color code - colorname, hexadecimal name or rgb value. Used for both showing the current value and the segment values |
| startColor | string         | #FF471A | Should be a valid color code - colorname, hexadecimal name or rgb value. Should be a valid input for [d3.interpolateHsl](https://github.com/d3/d3-interpolate#interpolateHsl)   |
| endColor | string         |  #33CC33 | Should be a valid color code - colorname, hexadecimal name or rgb value. Should be a valid input for [d3.interpolateHsl](https://github.com/d3/d3-interpolate#interpolateHsl)   |
| needleColor | string         | steelblue | Should be a valid color code - colorname, hexadecimal name or rgb value. Should be a valid input for [d3.interpolateHsl](https://github.com/d3/d3-interpolate#interpolateHsl)   |
| needleTransitionDuration | number         | 500     | Time in milliseconds. |
| needleTransition | string         | easeQuadInOut | [d3-easing-identifiers](https://github.com/d3/d3-ease) - easeLinear, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubicIn, easeCubicOut, easeCubicInOut, easePolyIn, easePolyOut, easePolyInOut, easeSinIn, 
| currentValueText | string | ${value} | Should be provided a string which should have **${value}** placeholder which will be replaced with current value. By default, current value is shown (formatted with `valueFormat`). For example, if current Value is 333 if 
| loadingTextDownload | string | value |  Should be provided a string for modify the text default the test of download   |
| loadingTextUpload | string | value |  Should be provided a string for modify the text default the test of upload   |
| textdownloadexcellent | string | value |  Should be provided a string for modify the text default for download Excellent   |
| textdownloadacceptable | string | value |  Should be provided a string for modify the text default for download Acceptable   |
| textuploadexcellent | string | value |  Should be provided a string for modify the text default for upload Excellent   |
| textuploadacceptable | string | value |  Should be provided a string for modify the text default for upload Acceptable   |
| account | string | value |  Should be provided your account SpeedOf.me  |
| domainName | string | value |  Domain that will test  |

## Examples

You can view [Examples here](https://github.com/michaeldouglas/react-speedofme/tree/master/example)

##### Default with no config

```javascript
import { SpeedOfMe, preloadScript } from "react-speedofme";
<SpeedOfMe/>
```

##### With configurations
```javascript
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
```

#### Credits:
`react-d3-speedometer` [react-d3-speedometer](https://github.com/palerdot/react-d3-speedometer)
`opentok-react` [opentok-react](https://github.com/aiham/opentok-react)

#### License:

[MIT](LICENSE)