import React from "react";

import "./App.css";

//my stuff ↓↓↓
import AddUser from "./users/AddUser";
import Login from "./users/Login";
import Topnavbar from "./top-navbar/Topnavbar";
import SingleitemViewer from "./products/SingleItemViewer";
import ItemPage from "./products/ItemPage";
//my stuff ↑↑↑

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "addUser",
		}; //this.state
		this.handlePage = this.handlePage.bind(this);
	}

	handlePage(page) {
		console.log("page");
		this.setState({ currentPage: page });
	}

	render() {
		const buttonNames = ["List", "Test IPage"]; //for testing
		switch (this.state.currentPage) {
			case "List":
				return (
					<div id="main">
						<Topnavbar buttonNames={buttonNames} handlePage={this.handlePage}></Topnavbar>
						<SingleitemViewer></SingleitemViewer>
					</div>
				);
				break;
			case "Test IPage":
				return (
					<div id="main">
						<Topnavbar buttonNames={buttonNames} handlePage={this.handlePage}></Topnavbar>
						<ItemPage></ItemPage>
					</div>
				);
				break;
			case "login":
				return (
					<div id="main">
						<Topnavbar buttonNames={buttonNames} handlePage={this.handlePage}></Topnavbar>
						<Login></Login>
					</div>
				);
			case "addUser":
				return (
					<div id="main">
						<Topnavbar buttonNames={buttonNames} handlePage={this.handlePage}></Topnavbar>
						<AddUser></AddUser>
					</div>
				);
			default:
				return (
					<div id="main">
						<Topnavbar buttonNames={buttonNames} handlePage={this.handlePage}></Topnavbar>
					</div>
				);
				break;
		}
	}
}
export default App;
