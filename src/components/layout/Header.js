import React from 'react';
import { Link } from 'react-router';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.banner}>
				<Link to="/"><h1 className={styles.name}>Ashley Berthiaume</h1></Link>
				<h2>New York City Fashion Design</h2>
			</header>
		);
	}
}
