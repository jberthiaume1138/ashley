import React from 'react';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.banner}>
				<h1 className={styles.bannerH1}>BannerText</h1>
				<h4 className={styles.bannerH2}>Some Sub-Header Stuff</h4>
			</header>
		);
	}
}
