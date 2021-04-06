import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddMobile from "./pages/add_mobile/add_mobile";
import Home from "./pages/home/home";
import NotFound from "./pages/not_found/not_found";
import Navbar from "./components/navbar/navbar";

import "./index.css";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/addMobile' component={AddMobile} />
					<Route exact path='/notfound' component={NotFound} />
					<Redirect to='/notfound' />
				</Switch>
			</BrowserRouter>
		</>
	);
}
