import React from 'react';

import sketch from '../images/comp-sketch-1.jpg';

import styles from './style/About.scss';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={sketch} height="400"/>
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.headline}>About me</h4>
					<p className={styles.mainText}>I am a New York City based clothing designer with a BFA from the Fashion Institute of Technology. I have over 9 years of experience working in both mass market and runway. My passion lies in creating products the everyday woman can wear. I draw inspiration from so many things, from costume history to architecture to modern art. I enjoy challenging myself, learning new skills, and traveling to discover new trends and processes.</p>
					<p className={styles.mainText}>	In addition to designing professionally, I have my own successful Etsy brand Go Follow Rabbits. It’s a store dedicated to fun, girly prints for young women.</p>
					<p className={styles.mainText}>I am always looking forward and try to interpret my passion through my work. </p>
				</div>
			</div>
		);
	}
}
