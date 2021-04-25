import React   from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Topnavbar extends React.Component {
  render(){
    return(
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">eKiosk</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
    );
  }
}
export default Topnavbar;