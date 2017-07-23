import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';

import styles from './App.css';

import Home from './components/Home';

import Nav from './components/Nav';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className={styles.App}>
					<div className={styles.layout}>
						<header />
						<main>
							<Switch>
								<Route exact path='/' component={Home} />
								{/* <Route path='/about' component={About} />
									<Route path='/portfolio' component={About} />
									<Route path='/press' component={About} />
								<Route path='/contact' component={About} /> */}
							</Switch>
						</main>
						<nav>
							<Nav />
						</nav>
					</div>

					<div className={styles.header}>
						<img src={logo} className={styles.logo} alt="logo" />
						<h2>Welcome to React!</h2>
					</div>
					<p className={styles.intro}>
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</div>
			</Router>
		);
	}
}
