import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner.react';

ReactDOM.render(
  <Spinner
    colorHex='#8764ba'
    style='double'
    spinnerWidth='3px'
    spinDuration={.5}
    size='100px'
  />,
  document.getElementById('spinner')
);
