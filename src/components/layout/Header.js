import React from 'react';
import { Link } from 'react-router';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			// <header>
				<div className={styles.wrapper}>
					<Link to="/"><h1 className={styles.headline}>Ashley Berthiaume</h1></Link>
					<h2 className={styles.subheader}>Fashion Designer</h2>
				</div>
			// </header>
		);
	}
}
