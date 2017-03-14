import React from 'react';

import sketch from '../images/comp-sketch-2.jpg';

import styles from './style/Contact.scss'

export default class Contact extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={sketch} height="400"/>
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.headline}>Contact me</h4>
					<p className={styles.mainText}></p>
				</div>
			</div>
		);
	}
}
