import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import courses from './course-data';

ReactDOM.render(
  <App courses={courses} />, 
  document.getElementById('root')
);
