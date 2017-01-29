import React from 'react';
import { Link } from 'react-router';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.banner}>
				<Link to="/"><h1>Your Name</h1></Link>
				<h2>Some Sub-Header Blurb!!</h2>
			</header>
		);
	}
}
