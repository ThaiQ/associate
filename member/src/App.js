import React from 'react';
import './App.css';

function App() {
  return (
    <div>

      <div className="App-header">
      <header id="head">
      <h1>SCE Officers</h1>
      <p>Officers and Associates </p>
      <body></body>
      </header>
      </div>

      <div className="tab">
        <button class="tablinks" onclick="openCity(event, '2018-2019')">2018-2019</button>
        <button class="tablinks" onclick="openCity(event, '2019-2020')">2019-2020</button>
      </div>

      <div id="year1" class="tabcontent">
        <h3>2018-2019</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="year2" class="tabcontent">
        <h3>2019-2020</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>

    </div>

  );
}

export default App;
