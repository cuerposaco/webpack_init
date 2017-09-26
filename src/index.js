import React, { Component } from 'react';
import { render } from 'react-dom';

import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/css';

function App(){
  return (
    <DatePicker />
  );
}

render(<App />, document.querySelector('#container'));