import React from 'react';

import sketch from '../images/comp-sketch-3.jpg';
import bunny from '../images/gfr-bunny.jpg';

import styles from './styles/Press.css';

export default class Press extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.sketchWrapper}>
					<img src={sketch} alt="sketch" />
				</div>
				<div className={styles.contentWrapper}>
					<h4 className={styles.headline}>Press</h4>
					<p>
						<a
							className={styles.presslink}
							href="http://fashionreverie.com/?p=2622"
							target="_blank"
							rel="noopener noreferrer"
						>
							Marlon Gobel Spring/Summer 2013 New York Fashion Week
						</a>
					</p>
					<p>
						<a
							className={styles.presslink}
							href="http://www.youtube.com/watch?v=BkGY8fOC8jk"
							target="_blank"
							rel="noopener noreferrer"
						>
							Stan Lee's Comikaze Fashion Show
						</a>
					</p>
					<div className={styles.gfrWrapper}>
						<h4 className={styles.gfrHeader}>Go Follow Rabbits...</h4>
						<div className={styles.gfrContent}>
							<div className={styles.gfrText}>
								<p>
									<a
										className={styles.presslink}
										href="http://girlgonegeekblog.com/2012/08/14/etsy-crush-of-the-week-go-chase-rabbits/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Girl Gone Geek Blog
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="www.thehunt.com/finds/FRbyvA-go-follow-rabbits---minecraft-skirt--go-chase-rabbits"
										target="_blank"
										rel="noopener noreferrer"
									>
										The Hunt
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="www.cnet.com/news/mars-panoramic-skirt-wrap-a-rover-around-your-waist/"
										target="_blank"
										rel="noopener noreferrer"
									>
										CNet
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="http://fashionablygeek.com/?s=Go+Follow+Rabbits"
										target="_blank"
										rel="noopener noreferrer"
									>
										Fashionably Geek
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="http://laughingsquid.com/space-shuttle-launch-skirt/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Laughing Squid
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="http://settostunning.com/2013/01/07/sts-spotlight-go-follow-rabbits-geek-chic-skirts/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Set to Stunny
									</a>
								</p>
								<p>
									<a
										className={styles.presslink}
										href="www.buzzfeed.com/donnad/10-pop-culture-skirts-have-my-fashion-sense-tingli?utm_term=.gv6B35rpl4#.fjAAaR8W0N"
										target="_blank"
										rel="noopener noreferrer"
									>
										BuzzFeed
									</a>
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
						{/* </div> */}
				</div>
			</div>
		);
	}
}
