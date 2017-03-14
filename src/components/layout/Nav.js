import React from 'react';
import { Link } from 'react-router';

import style from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className={style.wrapper}>
					<Link className={style.navLink} to="about">About</Link>
					<Link className={style.navLink} to="portfolio">Portfolio</Link>
					<Link className={style.navLink} to="contact">Contact</Link>
				</div>
			</nav>
		);
	}
}
