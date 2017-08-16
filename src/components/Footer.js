import React from 'react';

import styles from './styles/Footer.css';

import linkedin from '../images/logos/005-linkedin.png';
import email from '../images/logos/email.png';
import twitter from '../images/logos/006-twitter.png';
import facebook from '../images/logos/007-facebook.png';
import instagram from '../images/logos/008-instagram.png';
import tumblr from '../images/logos/003-tumblr.png';
import etsy from '../images/logos/004-etsy.png';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.icons}>
				<img src={email} alt="email icon" />
				<img src={linkedin} alt="linkedin icon" />
				<img src={instagram} alt="instagram icon" />
				<img src={twitter} alt="twitter icon" />
				<img src={tumblr} alt="tumblr icon" />
				<a
					className={styles.contactLink}
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.facebook.com/GofollowRabbits/'
				>
					<img src={facebook} alt="facebook icon" />
				</a>
			</div>
			<div className={styles.copyright}>
				<p>Copyright 2017 Ashley Berthiaume</p>
			</div>
		</div>
	);
}

export default Footer;
