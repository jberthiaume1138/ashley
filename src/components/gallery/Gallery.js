import React from 'react';

import Photo from './Photo';
import Pagination from './Pagination';

import style from './style/Gallery.scss';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			position: 0,
			images: this.props.photos,
			selectedImage: this.props.photos[0]
		};
	}

	handleThumbClick(thumb, index) {
		// console.log(index);
		this.setState({
			selectedImage: thumb,
			position: index
		});
	}

	handlePreviousClick() {
		console.log('Previous Clicked');

		let pos = this.state.position;

		if(pos === 0) {
			this.setState({position: this.state.images.length - 1});
		} else {
			pos--;
			this.setState({position: pos});
		}
	}

	handleNextClick() {
		console.log(this.state.position);
		// console.log('Next Clicked');
		//
		// let pos = this.state.position;
		// console.log(pos);
		//
		// if(this.state.position === this.state.images.length - 1) {
		// 	this.setState({position: 0});
		// } else {
		// 	let pos = this.state.position + 1;
		// 	this.setState({position: pos});
		// }

		if(this.state.position === this.state.images.length - 1) {
			console.log(`End, at: ${this.state.position} Reset to 0`);
			this.setState({position: 0});
		} else {
			console.log(`There are more, at position: ${this.state.position}`);
			let pos = this.state.position + 1;
			this.setState({position: pos});
		}
	}

	render() {
		return (
			<div>
				<h3>{this.state.position}</h3>

				<div className={style.selectedImage}>
					<Pagination onClick={this.handlePreviousClick.bind(this)} label={'<'} />
					<Photo src={this.state.selectedImage} width='400' height='400'/>
					<Pagination onClick={this.handleNextClick.bind(this)} label={'>'} />
				</div>
				<div className={style.thumbGallery}>
					{ this.state.images.map((thumb, index) => <Photo onClick={this.handleThumbClick.bind(this, thumb, index)} src={thumb} width='150' height='150'/>) }
				</div>
			</div>
		);
	}
}
