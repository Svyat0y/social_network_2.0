import React from "react";
import ReactDOM from "react-dom";
import store from "./Redux/redux-store"
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
	<HashRouter>
		<Provider store={ store }>
			<App/>
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
