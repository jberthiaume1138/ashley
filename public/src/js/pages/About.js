import React from 'react';

import style from './style/About.scss';

export default class About extends React.Component {
	render() {
		return (
			<div>
				<p>About me...</p>
				<p className={style.p}>When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.</p>
			</div>
		);
	}
}
