import React from 'react';
import { Link } from 'react-router';

import styles from '../../../css/layout/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.myHeader}>
				<Link to="/"><h1 className={styles.myH1}>HeaderTextHere!!!</h1></Link>
				<h4 className={styles.myThing}>Some Sub-Header Stuff</h4>
			</header>
		);
	}
}
