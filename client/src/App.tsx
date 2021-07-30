import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddUser from "./myComponents/AddUser/AddUser";
import Login from "./myComponents/Login/Login";
import Topnavbar from "./myComponents/TopNavbar/Topnavbar";
import SingleitemViewer from "./myComponents/SingleItemViewer/SingleItemViewer";
import ItemPage from "./myComponents/ItemPage/ItemPage";

import "./App.css";
import "./css/mystyle.css";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
	render() {
		const buttonNames = ["list", "testPage"]; //for testing
		return (
			<Router>
				<Topnavbar buttonNames={buttonNames}></Topnavbar>
				<Switch>
					<Route path="/list">
						<SingleitemViewer></SingleitemViewer>
					</Route>
					<Route path="/testPage">
						<ItemPage></ItemPage>
					</Route>
					<Route path="/addUser">
						<AddUser></AddUser>
					</Route>
					<Route path="/">
						<Login></Login>
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
