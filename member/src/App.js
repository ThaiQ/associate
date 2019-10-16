
import React from 'react';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

function App() {
  return (
    <div>

      <div className="App-header">
      <header id="head">
      <h1>SCE Officers</h1>
      <p>Officers and Associates of SCE</p>
      <body> body </body>
      </header>
      </div>

      <ButtonToolbar>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
      </ButtonToolbar>

    </div>

  );
}

export default App;
