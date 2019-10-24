import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,ButtonToolbar,Col,Container,Table,Navbar,Form,InputGroup,FormControl,Nav} from 'react-bootstrap'
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
//import Row from 'react-bootstrap/Row'
//import Container from 'react-bootstrap/Container'






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




      <header className="App-header">
        <h1>
        Officer Page
        </h1>
      </header>



      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Nae Nae</td>
      <td>B</td>
      <td>@bananar</td>
    </tr>
    <tr>
      <td>2</td>
      <td>surabhi</td>
      <td>gupta</td>
      <td>@dang dude that sucks!!!!</td>
    </tr>
    <tr>
      <td>3</td>
      <td>seema</td>
      <td>vora</td>
      <td>@samsingh</td>
    </tr>
  </tbody>
</Table>




    </div>


  );
}

export default App;
