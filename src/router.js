import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';

import Home from './routes/Home';

const componentRoutes = {
	component: Layout,
	path: '/',
	IndexRoute: { component: Home },
	childRoutes: [
		{
			path: 'about',
			getComponent(location, cb) {
				System.import('./routes/About')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: 'portfolio',
			getComponent(location, cb) {
				System.import('./routes/Portfolio')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: 'contact',
			getComponent(location, cb) {
				System.import('./routes/Contact')
					.then(module => cb(null, module.default));
			}
		}
	]

};

const Routes = () => {
	return (
		<Router history={hashHistory} routes={componentRoutes} />
	);
};

export default Routes;
