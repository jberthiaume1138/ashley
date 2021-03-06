import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/Header.css';

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Link to="/"><h1 className={styles.headline}>Ashley Berthiaume</h1></Link>
			<h2 className={styles.subheader}>Fashion Designer</h2>
		</div>
	);
}

export default Header;
