import React from 'react';

import styles from './styles/Home.css';

import one from '../images/sketch-1.jpg';
import two from '../images/sketch-2.jpg';
import three from '../images/sketch-3.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
				<div className={styles.imageWrapper}>
					<img src={two} alt="sketch"/>
				</div>
				<div className={styles.imageWrapper}>
					<img src={one} alt="sketch"/>
				</div>
				<div className={styles.imageWrapper}>
					<img src={three} alt="sketch"/>
				</div>
			</div>
		);
	}
}
