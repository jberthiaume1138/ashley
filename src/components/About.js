import React from 'react';

import sketch from '../images/comp-sketch-1.jpg';
import bunny from '../images/gfr-bunny.jpg';

import linkedin from '../images/logos/005-linkedin.png';
import email from '../images/logos/email.png';
import twitter from '../images/logos/006-twitter.png';
import facebook from '../images/logos/007-facebook.png';
import instagram from '../images/logos/008-instagram.png';

import styles from './styles/About.css';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sketchWrapper}>
					<img src={sketch} alt='sketch' />
				</div>
				<div className={styles.contentWrapper}>
					<div className={styles.textWrapper}>
						<h4 className={styles.headline}>About me</h4>
						<p className={styles.mainText}>I am a New York City based clothing designer with a BFA from the Fashion Institute of Technology. I have over 9 years of experience working in both mass market and runway. My passion lies in creating products the everyday woman can wear. I draw inspiration from so many things, from costume history to architecture to modern art. I enjoy challenging myself, learning new skills, and traveling to discover new trends and processes.</p>
						<p className={styles.mainText}>	In addition to designing professionally, I have my own successful Etsy brand Go Follow Rabbits. It’s a store dedicated to fun, girly prints for young women.</p>
						<p className={styles.mainText}>I am always looking forward and try to interpret my passion through my work. </p>
					</div>
					<div className={styles.iconRow}>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.linkedin.com/in/ashleyberthiaume'
							>
								<img src={email} alt='email icon' />
							</a>
						</div>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.linkedin.com/in/ashleyberthiaume'
							>
								<img src={linkedin} alt='linkedin icon' />
							</a>
						</div>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.facebook.com/GofollowRabbits/'
							>
								<img src={facebook} alt="facebook icon" />
							</a>
						</div>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://twitter.com/gofollowrabbits/'
							>
								<img src={twitter} alt="twitter icon" />
							</a>
						</div>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.instagram.com/gofollowrabbits/'
							>
								<img src={instagram} alt="instagram icon" />
							</a>
						</div>
					</div>
					<div className={styles.bunny}>
						<a
							className={styles.presslink}
							href='https://www.etsy.com/shop/gofollowrabbits/'
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={bunny} alt='bunny logo' />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
