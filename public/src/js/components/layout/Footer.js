import React from 'react';

import style from './style/Footer.scss';

export default class Footer extends React.Component {
	render () {
		return (
            <footer>
				<p className={style.copyright}>Copyright FirstName LastName 2017</p>
			</footer>
		);
	}
}
