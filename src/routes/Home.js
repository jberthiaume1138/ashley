import React from 'react';

import styles from './style/Home.scss';

export default class Home extends React.Component {
	render() {
		return (
			<main>
				<div className={styles.homeWrapper}>
					<p>Home Content</p>
					<p>Home Content</p>
					<p>Home Content</p>
				</div>
			</main>
		);
	}
}
