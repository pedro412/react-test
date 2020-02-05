import React from 'react';
import LineGraph from './components/LineGraph';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container'>
      <h1>React Test</h1>
      <hr />
      <LineGraph />
      <hr />
      <Posts />
    </div>
  );
};

export default App;
