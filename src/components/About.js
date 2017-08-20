import React from 'react';

import Colossus from './Colossus';

import sketch from '../images/comp-sketch-1.jpg';
import sketch2 from '../images/comp-sketch-2.jpg';
import bunny from '../images/gfr-bunny.jpg';

import linkedin from '../images/logos/linkedin.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import twitter from '../images/logos/twitter.png';
import tumblr from '../images/logos/tumblr.png';
import etsy from '../images/logos/etsy.png';

import styles from './styles/About.css';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sketchWrapper}>
					<img src={sketch} alt='sketch' />
					<img className={styles.secondarySketch} src={sketch2} alt='sketch' />
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
							<Colossus />
						</div>
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.linkedin.com/in/ashleyberthiaume/'
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
						<div className={styles.imageWrapper}>
							<a
								className={styles.contactLink}
								target='_blank'
								rel='noopener noreferrer'
								href='https://gofollowrabbits.tumblr.com//'
							>
								<img src={tumblr} alt="tumblr icon" />
							</a>
						</div>
					</div>
					<div className={styles.bunnyRow}>
						<div className={styles.bunny}>
							<img src={bunny} alt='bunny logo' />
						</div>
						<div className={styles.iconWrapper} >
							<a
								className={styles.presslink}
								href='https://www.etsy.com/shop/gofollowrabbits/'
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={etsy} alt='etsy logo' />
							</a>
						</div>
						<div className={styles.textWrapper}>
							<p className={[styles.mainText, styles.bunnyCaption].join(' ')}>Be sure to check out the Go Follow Rabbits Etsy storefront!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
