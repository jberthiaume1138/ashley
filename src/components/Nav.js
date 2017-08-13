import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/Nav.css';

const Nav = () => {
	return (
		<ul className={styles.wrapper}>
			<li>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navActive}
					to="about"
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navActive}
					to="portfolio"
				>
					Portfolio
				</NavLink>
			</li>
			<li>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navActive}
					to="press"
				>
					Press
				</NavLink>
			</li>
			<li>
				{/* <NavLink
					className={styles.navLink}
					activeClassName={styles.navActive}
					to="contact"
					>
					Contact
				</NavLink> */}
			</li>
		</ul>
	);
};

export default Nav;
