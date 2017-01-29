import React from 'react';

import Photo from './Photo';
import Pagination from './Pagination';

import style from './style/Gallery.scss';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: this.props.photos,
			selectedImage: this.props.photos[0]
		}
	}

	handleThumbClick(selectedImage) {
		// console.log('Next clicked');
		this.setState({
			selectedImage
		});
	}

	render() {
		return (
			<div>
				<div className={style.selectedImage}>
					<Pagination label={'<'} />
					<Photo src={this.state.selectedImage} width='400' height='400'/>
					<Pagination label={'>'} />
				</div>
				<div className={style.thumbGallery}>
					{ /*this.props.photos.map(photo => <img onClick={this.handleThumbClick.bind(this, photo)} src={photo} width='200' height='200'/>) */}
				 	{ this.props.photos.map(photo => <Photo onClick={this.handleThumbClick.bind(this, photo)} src={photo} width='150' height='150'/>) }
				</div>
			</div>
		);
	}
}
