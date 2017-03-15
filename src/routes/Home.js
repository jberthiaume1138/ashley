import React from 'react';

import styles from './style/Home.scss';

import one from '../images/sketch-1.jpg';
import two from '../images/sketch-2.jpg';
import three from '../images/sketch-3.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
				<img className={styles.largeFormat} src={two} height='700' />
				<img className={styles.mobileFirst} src={one} height='700' />
				<img className={styles.largeFormat} src={three} height='700' />
			</div>
		);
	}
}
