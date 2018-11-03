import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route } from 'react-router-dom';
import Lienzo from './Lienzo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const RouterLienzo = (
	<BrowserRouter>
		<Route path="/" component={Lienzo} />
	</BrowserRouter>
);



ReactDOM.render(
	RouterLienzo,
	document.getElementById('root')
);
