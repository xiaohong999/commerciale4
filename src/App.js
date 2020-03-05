import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
