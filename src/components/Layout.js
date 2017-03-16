import React from 'react';
import { Link } from 'react-router';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import styles from './layout/style/Layout.scss';

export default class Layout extends React.Component {
	render() {
		return (
			<div className={styles.layout}>
				<header>
					<Header />
				</header>
				<main>
					{this.props.children}
				</main>
				<nav>
					<Nav />
				</nav>
			</div>
		);
	}
}
