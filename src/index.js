import React from 'react';
import { render } from "react-dom";
import { 
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import './index.scss';
import App from './App';

const rootElement = document.getElementById('root');
render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</HashRouter>,
	rootElement
);
