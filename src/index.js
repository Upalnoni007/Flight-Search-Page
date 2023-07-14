import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlightSearch from './FlightSearch';
import Book from './Book';


ReactDOM.render(
  <React.StrictMode>
    <FlightSearch />
    <Book />
  </React.StrictMode>,
  document.getElementById('root')
  
);
