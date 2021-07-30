import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import AddUser from "./myComponents/AddUser/AddUser";
import Login from "./myComponents/Login/Login";
import Topnavbar from "./myComponents/Topnavbar/Topnavbar";
import SingleitemViewer from "./myComponents/SingleItemViewer/SingleItemViewer";
import ItemPage from "./myComponents/ItemPage/ItemPage";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
	render() {
		const buttonNames = ["List", "Test IPage"]; //for testing
		return (
			<Router>
				<Topnavbar buttonNames={buttonNames} handlePage={() => console.log("meme")}></Topnavbar>
				<Switch>
					<Route path="/">
						<Login></Login>
					</Route>
					<Route path="/list">
						<SingleitemViewer></SingleitemViewer>
					</Route>
					<Route path="/testPage">
						<ItemPage></ItemPage>
					</Route>
					<Route path="/addUser">
						<AddUser></AddUser>
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
