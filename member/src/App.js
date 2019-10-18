
import React from 'react';
import './App.css';
import { } from 'react-bootstrap';
let people = [{name: 'person', lastname: 'one'},
{name: 'person', lastname: 'two'},
{name: 'person', lastname: 'three'}
,{name: 'person', lastname: 'four'}
,{name: 'person', lastname: 'five'}
,{name: 'person', lastname: 'six'}
,{name: 'person', lastname: 'seven'}
,{name: 'person', lastname: 'eight'}
,{name: 'person', lastname: 'nine'}
,{name: 'person', lastname: 'ten'}]



function trial(person){
  return <tr>
    <th scope="row">1</th>
    <td>{person.name}</td>
    <td>{person.lastname}</td>
  </tr>
}

function App() {
  return (
    <div>

      <div className="App-header">
      <header id="head">
        <h1>
          <div className="tab">
            <button class="tablinks" onclick="openCity(event, '2018-2019')">2018-2019</button>
            <button class="tablinks" onclick="openCity(event, '2019-2020')">2019-2020</button>
          </div>

          <div id="year1" class="tabcontent">
            <h3>2018-2019</h3>
          </div>

          <div id="year2" class="tabcontent">
            <h3>2019-2020</h3>
          </div>
        </h1>
      <h2> Software and Computer Engineering Society Officers </h2>
      <p>Officers and Associates </p>

      <body>

        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
              </tr>
            </thead>

            <tbody>
                {people.map(person => {return trial(person)})}


            </tbody>
        </table>

      </body>

      </header>
      </div>

    </div>

  );
}

export default App;
