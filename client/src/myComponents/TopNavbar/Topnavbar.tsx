import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

interface TopnavbarProps {
	buttonNames: string[];
}

interface TopnavbarState {}

class Topnavbar extends React.Component<TopnavbarProps, TopnavbarState> {
	private printNavbarButtons() {
		const nameOfButtons = this.props.buttonNames;
		const printedButtons = [];
		for (let i = 0; i < nameOfButtons.length; i++) {
			const snameOfButton = nameOfButtons[i];
			printedButtons.push(
				<Nav.Link key={snameOfButton}>
					<Link to={"/" + nameOfButtons[i]}>{nameOfButtons[i]}</Link>
				</Nav.Link>
			);
		}
		return printedButtons;
	}

	render() {
		return (
			<Navbar bg="primary primaryAlter" variant="dark">
				<Navbar.Brand href="">
					<Link to="/">eKiosk</Link>
				</Navbar.Brand>
				<Nav className="mr-auto">{this.printNavbarButtons()}</Nav>
			</Navbar>
		);
	}
}
export default Topnavbar;
