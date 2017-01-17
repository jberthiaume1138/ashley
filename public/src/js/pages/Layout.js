import React from 'react';
import { Link } from 'react-router';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

import styles from './style/Layout.scss';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Nav/>
				<Footer/>
			</div>
		);
	}
}
