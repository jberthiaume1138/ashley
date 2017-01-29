import React from 'react';

import styles from './style/Portfolio.scss';

import Gallery from '../components/gallery/Gallery';

export default class Portfolio extends React.Component {
	render() {
		var imageData = [
			'http://i82.photobucket.com/albums/j277/jedimaster1138/Penny/IMAG9750_zpsjjbxfjmo.jpg',
			'http://i82.photobucket.com/albums/j277/jedimaster1138/code%20assistant_zpsonayqtzp.jpg',
			'http://i82.photobucket.com/albums/j277/jedimaster1138/peppermint%20angel_zpsqcochmgf.jpg'
			// 'http://lorempixel.com/g/200/200/',
			// 'http://lorempixel.com/g/250/250/',
			// 'http://lorempixel.com/g/200/400/'
		];

		return (
			<div>
				<p className={styles.mypara}>This is my portfolio</p>
				<Gallery photos={imageData} />
			</div>
		);
	}
}
