import React from 'react';

import styles from './style/Footer.scss';

export default class Footer extends React.Component {
	render () {
		return (
      // <footer>
				<div className={styles.wrapper}>
					<p className={styles.copyright}>Copyright 2017 Ashley Berthiaume</p>
				</div>
			// </footer>
		);
	}
}
