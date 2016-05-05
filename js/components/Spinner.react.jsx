import React from 'react';

const styles = {

  spinner: {
    animation: 'rotate 2s linear infinite',

    borderTop: '5px solid rgba(40, 210, 164, 1)',
    borderRight: '5px solid rgba(40, 210, 164, 1)',
    borderBottom: '5px solid rgba(40, 210, 164, 1)',
    borderLeft: '5px solid rgba(40, 210, 164, .3)',

    borderRadius: '100%',
    height: '35px',
    width: '35px',
  }

};

export default class Spinner extends React.Component {

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
      stylesheet.insertRule(`@-webkit-keyframes ${animationName} {from{-webkit-${propName}: ${fromRule};} to {-webkit-${propName}: ${toRule};}}`);
    } else if (CSSRule.MOZ_KEYFRAMES_RULE) {
      stylesheet.insertRule(`@-moz-keyframes ${animationName} {from{-moz-${propName}: ${fromRule};} to {-moz-${propName}: ${toRule};}}`);
    } else if (CSSRule.MS_KEYFRAMES_RULE) {
      stylesheet.insertRule(`@-ms-keyframes ${animationName} {from{-ms-${propName}: ${fromRule};} to {-ms-${propName}: ${toRule};}}`);
    } else {
      stylesheet.insertRule(`@keyframes ${animationName} {from{${propName}: ${fromRule};} to {${propName}: ${toRule};}}`);
    }
  }

  render() {
    this.addAnimationRules();

    const spinnerStyle = Object.assign({}, styles.spinner);
    return (
      <div style={spinnerStyle}></div>
    );
  }
}
