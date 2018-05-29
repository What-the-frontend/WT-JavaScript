import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentPerformance from './ComponentPerformance';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComponentPerformance />, document.getElementById('root'));
registerServiceWorker();
