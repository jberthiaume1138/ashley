import React from 'react';

import sketch from '../images/comp-sketch-2.jpg';
import gfr from '../images/gfr-banner.jpg';

import styles from './styles/Contact.css';

export default class Contact extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={sketch} alt="sketch" height="400" />
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.headline}>Contact me</h4>
					<p className={styles.mainText}>
						<a
							className={styles.contactLink}
							target="_blank"
							rel="noopener noreferrer"
							to="https://www.linkedin.com/in/ashleyberthiaume"
						>
							LinkedIn
						</a>
					</p>
					<div className={styles.imageWrapper}>
						<img src={gfr} alt="Go Follow Rabbits banner" />
					</div>
					<p className={styles.mainText}>
						<a
							className={styles.contactLink}
							target="_blank"
							rel="noopener noreferrer"
							to="https://www.instagram.com/gofollowrabbits/"
						>
							Instagram
						</a>
					</p>
					<p className={styles.mainText}>
						https://www.facebook.com/GofollowRabbits/
					</p>
					<p className={styles.mainText}>
						Vist the Go Follow Rabbits shop!
						https://www.etsy.com/shop/gofollowrabbits/
					</p>
				</div>
			</div>
		);
	}
}
