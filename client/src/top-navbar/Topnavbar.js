import React   from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Topnavbar extends React.Component {
  printNavbarButtons(){
    const nameOfButtons = this.props.buttonNames;
    const printedButtons = [];
    for (let i = 0; i < nameOfButtons.length; i++) {
      printedButtons.push(<Nav.Link href={"#"+nameOfButtons[i]}>{nameOfButtons[i]}</Nav.Link>);
    }
    return printedButtons;
  }

  render(){
    return(
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="">eKiosk</Navbar.Brand>
      <Nav className="mr-auto">
        {this.printNavbarButtons()}
      </Nav>
    </Navbar>
    );
  };
} export default Topnavbar;