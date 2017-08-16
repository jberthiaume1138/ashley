import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';

import styles from './App.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Press from './components/Press';
import Contact from './components/Contact';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className={styles.App}>
					<header>
						<Header />
					</header>
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path='/about' component={About} />
							<Route path='/portfolio' component={Portfolio} />
							<Route path='/press' component={Press} />
							<Route path='/contact' component={Contact} />
						</Switch>
					</main>
					<nav>
						<Nav />
					</nav>
					<footer>
						<Footer />
					</footer>
				</div>
			</Router>
		);
	}
}
