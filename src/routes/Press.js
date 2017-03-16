import React from 'react';

import sketch from '../images/comp-sketch-3.jpg';

import styles from './style/Press.scss';

export default class Press extends React.Component {
	render() {
		return(
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={sketch} height="400"/>
				</div>
				<div className={styles.textWrapper}>
					<h4 className={styles.headline}>Press</h4>
					<p className={styles.mainText}>
						Marlon Gobel Spring/Summer 2013 New York Fashion Week
						http://fashionreverie.com/?p=2622

						Stan Lee's Comikaze Fashion Show
						www.youtube.com/watch?v=BkGY8fOC8jk

						Go Follow Rabbits Press:

						Girl Gone Geek Blog
						http://girlgonegeekblog.com/2012/08/14/etsy-crush-of-the-week-go-chase-rabbits/

						The Hunt
						www.thehunt.com/finds/FRbyvA-go-follow-rabbits---minecraft-skirt--go-chase-rabbits

						CNet
						www.cnet.com/news/mars-panoramic-skirt-wrap-a-rover-around-your-waist/

						Fashionably Geek
						http://fashionablygeek.com/?s=Go+Follow+Rabbits

						Laughing Squid
						http://laughingsquid.com/space-shuttle-launch-skirt/

						Set to Stunny
						http://settostunning.com/2013/01/07/sts-spotlight-go-follow-rabbits-geek-chic-skirts/

						BuzzFeed
						www.buzzfeed.com/donnad/10-pop-culture-skirts-have-my-fashion-sense-tingli?utm_term=.gv6B35rpl4#.fjAAaR8W0N
					</p>
				</div>
			</div>
		);
	}
}
