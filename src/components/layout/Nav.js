import React from 'react';
import { Link } from 'react-router';

import styles from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			// <nav>
				<div className={styles.wrapper}>
					<Link className={styles.navLink} activeClassName={styles.navActive} to='about'>About</Link>
					<Link className={styles.navLink} activeClassName={styles.navActive} to='portfolio'>Portfolio</Link>
					<Link className={styles.navLink} activeClassName={styles.navActive} to='press'>Press</Link>
					<Link className={styles.navLink} activeClassName={styles.navActive} to='contact'>Contact</Link>
				</div>
			// </nav>
		);
	}
}
