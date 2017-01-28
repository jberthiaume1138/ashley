import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {
	render() {
		return (
			<div>
				{ this.props.photos.map(photo => <Photo src={photo} />) }
			</div>
		);
	}
}
