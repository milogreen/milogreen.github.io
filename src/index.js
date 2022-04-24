import React from 'react';
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
render(
	<HashRouter>
		<App />, rootElement
	</HashRouter>
);
