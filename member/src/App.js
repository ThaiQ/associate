
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
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
        </table>
      </body>
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





      <ButtonToolbar>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
      </ButtonToolbar>

    </div>

  );
}

export default App;
