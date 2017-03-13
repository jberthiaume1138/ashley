import React from 'react';
import { Link } from 'react-router';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header>
				<div className={styles.banner}>
					<Link to="/"><h1 className={styles.name}>Ashley Berthiaume</h1></Link>
					<h2>New York City Based Fashion Design</h2>
				</div>
			</header>
		);
	}
}
