import React from 'react';

import styles from './style/Portfolio.scss';

import Gallery from '../components/gallery/Gallery';

export default class Portfolio extends React.Component {
	render() {
		var imageData = [
			'http://lorempixel.com/600/600/',
			'http://lorempixel.com/800/800/'
		];

		return (
			<div>
				<p className={styles.mypara}>This is my portfolio</p>
				<Gallery photos={imageData} />
			</div>
		);
	}
}
