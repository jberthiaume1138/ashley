import React from 'react';

import email from '../images/logos/email.png';

export default class Colossus extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			rasputin: ''
		}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let p = 'mailto:'
		let r = 'ash';
		let y = 'wonderland85';
		let d = 'gmail';
		let e = 'com';

		this.setState({
			rasputin: `${p}${r}${y}@${d}.${e}`
		})
		// console.log(this.state.rasputin);
	}
	render() {
		return (
			<div>
				<a href={this.state.rasputin}	>
					<img src={email} alt='email icon' onClick={this.handleClick}/>
				</a>
			</div>
		);
	}
}
