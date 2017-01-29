import React from 'react';

import Photo from './Photo';
import Pagination from './Pagination';

import style from './style/Gallery.scss';


export default class Gallery extends React.Component {
	render() {
		return (
			<div className={style.gallery}>
				{ this.props.photos.map(photo => <Photo src={photo} />) }
				<Pagination />
			</div>
		);
	}
}
