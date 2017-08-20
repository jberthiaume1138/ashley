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
			<ul className={styles.icons}>
				<li>
					<Colossus />
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.linkedin.com/in/ashleyberthiaume'
						>
							<img src={linkedin} alt='linkedin icon' />
						</a>
					</div>
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.facebook.com/GofollowRabbits/'
						>
							<img src={facebook} alt="facebook icon" />
						</a>
					</div>
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://twitter.com/gofollowrabbits/'
						>
							<img src={twitter} alt="twitter icon" />
						</a>
					</div>
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.instagram.com/gofollowrabbits/'
						>
							<img src={instagram} alt="instagram icon" />
						</a>
					</div>
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://gofollowrabbits.tumblr.com/'
						>
							<img src={tumblr} alt="tumblr icon" />
						</a>
					</div>
				</li>
				<li>
					<div className={styles.imageWrapper}>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.etsy.com/shop/gofollowrabbits/'
						>
							<img src={etsy} alt="etsy icon" />
						</a>
					</div>
				</li>
			</ul>
			<div className={styles.copyright}>
				<p>Copyright 2017 Ashley Berthiaume</p>
			</div>
		</div>
	);
}

export default Footer;
