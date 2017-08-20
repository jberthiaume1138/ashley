import React from 'react';

import Colossus from './Colossus';

import styles from './styles/Footer.css';

import linkedin from '../images/logos/linkedin.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import twitter from '../images/logos/twitter.png';
import tumblr from '../images/logos/tumblr.png';
import etsy from '../images/logos/etsy-e.png';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.icons}>
				<Colossus />
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
				<div className={styles.imageWrapper}>
					<a
						className={styles.contactLink}
						target='_blank'
						rel='noopener noreferrer'
						href='https://gofollowrabbits.tumblr.com/'
					>
						<img src={tumblr} alt="tumblr icon" />
					</a>
				</div>
				<div className={styles.imageWrapper}>
					<a
						className={styles.contactLink}
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.etsy.com/shop/gofollowrabbits/'
					>
						<img src={etsy} alt="etsy icon" />
					</a>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Copyright 2017 Ashley Berthiaume</p>
			</div>
		</div>
	);
}

export default Footer;
