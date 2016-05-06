import React from 'react';

const styles = {
  //default styles
  spinner: {
    animation: 'rotate 2s linear infinite',
    background: 'transparent',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'rgba(40, 210, 164, .8)',
    borderLeftColor: 'rgba(40, 210, 164, .3)',
    borderRadius: '100%',
    margin: 'auto',
    height: '35px',
    width: '35px',
  },
  container: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    background: 'rgba(230, 230, 230, .3)',
  },
};

export default class Spinner extends React.Component {

  componentDidMount() {
    this.addAnimationRules();
  }

  addAnimationRules() {
    let stylesheet = document.styleSheets[0];
    let styleEl;
    if (!stylesheet) {
      styleEl = document.createElement('style');
      document.head.appendChild(styleEl);
      stylesheet = styleEl.sheet;
    }

    const animationName = 'rotate';
    const fromRule = 'rotate(0deg)';
    const toRule = 'rotate(360deg)';
    const propName = 'transform';
    
    if (CSSRule.WEBKIT_KEYFRAMES_RULE) {
      stylesheet.insertRule(`@-webkit-keyframes ${animationName} {from{-webkit-${propName}: ${fromRule};} to {-webkit-${propName}: ${toRule};}}`, 0);
    } else if (CSSRule.MOZ_KEYFRAMES_RULE) {
      stylesheet.insertRule(`@-moz-keyframes ${animationName} {from{-moz-${propName}: ${fromRule};} to {-moz-${propName}: ${toRule};}}`, 0);
    } else if (CSSRule.MS_KEYFRAMES_RULE) {
      stylesheet.insertRule(`@-ms-keyframes ${animationName} {from{-ms-${propName}: ${fromRule};} to {-ms-${propName}: ${toRule};}}`, 0);
    } else {
      stylesheet.insertRule(`@keyframes ${animationName} {from{${propName}: ${fromRule};} to {${propName}: ${toRule};}}`, 0);
    }
  }

  /*
   * Convert hex color code to RGB
   * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   */
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }

  render() {
    const spinnerStyle = Object.assign({}, styles.spinner);
    const containerStyle = Object.assign({}, styles.container);

    if (this.props.colorHex) {
      const borderRGB = this.hexToRgb(this.props.colorHex);
      if (borderRGB) {
        spinnerStyle.borderColor = `rgba(${borderRGB.r}, ${borderRGB.g}, ${borderRGB.b}, .7)`;
        spinnerStyle.borderLeftColor = `rgba(${borderRGB.r}, ${borderRGB.g}, ${borderRGB.b}, .3)`;
      }
    }

    if (this.props.size) {
      spinnerStyle.height = this.props.size;
      spinnerStyle.width = this.props.size;
    }

    if (this.props.spinnerWidth) {
      spinnerStyle.borderWidth = this.props.spinnerWidth;
    }

    if (this.props.style) {
      spinnerStyle.borderStyle = this.props.style;
    }

    if (this.props.spinDuration) {
      spinnerStyle.animationDuration = `${this.props.spinDuration}s`;
    }

    return (
      <div style={containerStyle}>
        <div style={spinnerStyle}></div>
      </div>
    );
  }
}

Spinner.propTypes = {
  colorHex: React.PropTypes.string,
  spinnerWidth: React.PropTypes.string,
  spinDuration: React.PropTypes.number,
  style: React.PropTypes.string,
  size: React.PropTypes.string,
};
