import React from 'react';

import styles from './style/Home.scss';

import one from '../images/sketch-1.jpg';
import two from '../images/sketch-2.jpg';
import three from '../images/sketch-3.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
				<div className={[styles.container, styles.largeOnly].join(' ')}>
					<img src={two} />
				</div>
				<div className={[styles.container, styles.mobileFirst].join(' ')}>
					<img src={one} />
				</div>
				<div className={[styles.container, styles.largeOnly].join(' ')}>
					<img src={three} />
				</div>
			</div>
		);
	}
}
