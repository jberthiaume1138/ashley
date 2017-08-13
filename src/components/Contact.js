import React from 'react';

import sketch from '../images/comp-sketch-2.jpg';
import gfr from '../images/gfr-banner.jpg';
import bunny from '../images/standing-rabbit-bw.jpg';

import linkedin from '../images/logos/005-linkedin.png';
import email from '../images/logos/email.png';
import twitter from '../images/logos/006-twitter.png';
import facebook from '../images/logos/007-facebook.png';
import instagram from '../images/logos/008-instagram.png';

import styles from './styles/Contact.css';

export default class Contact extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sketchWrapper}>
					<img src={sketch} alt='sketch' />
				</div>
				<div className={styles.contentWrapper}>
					<h4 className={styles.headline}>Contact me</h4>
					<div className={styles.iconRow}>
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
								href='https://www.linkedin.com/in/ashleyberthiaume'
							>
								<img src={email} alt='email icon' />
							</a>
						</div>
					</div>

					<div className={styles.imageWrapper}>
						<img src={gfr} alt='Go Follow Rabbits banner' />
					</div>
					<div className={styles.iconRow}>
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
					<div>
						<p className={styles.mainText}>Vist the Go Follow Rabbits shop!
							https://www.etsy.com/shop/gofollowrabbits/
						</p>
					</div>
					<div className={[styles.imageWrapper, styles.bunny].join(' ')}>
						<a
							className={styles.presslink}
							href='https://www.etsy.com/shop/gofollowrabbits/'
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={bunny} alt="Go Follow Rabbits logo" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
