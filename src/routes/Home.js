import React from 'react';

import styles from './style/Home.scss';

import one from '../images/sketch-1.jpg';
import two from '../images/sketch-2.jpg';
import three from '../images/sketch-3.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
				<img src={two} height='600' />
				<img src={one} height='600' />
				<img src={three} height='600' />
			</div>
		);
	}
}
