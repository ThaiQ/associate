import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,ButtonToolbar,Col,Container,Table,Navbar,Form,InputGroup,FormControl,Nav} from 'react-bootstrap'
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
//import Row from 'react-bootstrap/Row'
//import Container from 'react-bootstrap/Container'


let people = [
  {
    firstname:"Thai",
    lastname:"Quach",
    email:"thai.quach@sjsu.edu",
    uploadpicture:"url",
    major: "software engineering",
    linkedin:"thai link",
    github: "thai",
  },
  {
    firstname:"zach",
    lastname:"Qu",
    email:"thai.qua",
    uploadpicture:"u",
    major: "engineering",
    linkedin:"thai link",
    github: "thai",
  }
]

function display(person) {
  return (
  <tr>
      <td>{person.firstname}</td>
      <td>{person.lastname}</td>
      <td>{person.email}</td>
      <td>{person.uploadpicture}</td>
      <td>{person.major}</td>
      <td>{person.linkedin}</td>
      <td>{person.github}</td>
    </tr>
  )
}

function App() {
  return (
    <div className="App">



      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />



      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Add Member</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

</>




      <header id="App-header">
        <h1>
        Officer Page
        </h1>
      </header>



      <Table striped bordered hover variant="dark">

    <tr>

      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Upload Picture</th>
      <th>Major</th>
      <th>LinkedIn</th>
      <th>Github</th>
    </tr>



  <tbody>
{people.map(personValue=>{
  return display(personValue)
})}
  </tbody>
</Table>




    </div>


  );
}

export default App;
