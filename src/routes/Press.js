import React from 'react';

import sketch from '../images/comp-sketch-3.jpg';

import styles from './style/Press.scss';

export default class Press extends React.Component {
	render() {
		return(
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={sketch} height="400"/>
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.headline}>Press</h4>
					<p className={styles.mainText}></p>
				</div>
			</div>
		);
	}
}
