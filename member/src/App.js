
import React from 'react';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

function App() {
  return (
    <div>

      <div className="App-header">
      <header id="head">
      <h1>SCE Officers</h1>
      <p>Officers and Associates </p>
      <body>
      <div className="tab">
        <button class="tablinks" onclick="openCity(event, '2018-2019')">2018-2019</button>
        <button class="tablinks" onclick="openCity(event, '2019-2020')">2019-2020</button>
      </div>
      </body>
      </header>
      </div>
    </div>

  );
}

export default App;
