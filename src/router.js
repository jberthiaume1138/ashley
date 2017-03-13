import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';
import Home from './routes/Home';

import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';

// const componentRoutes = {
// 	path: '/',
// 	component: Layout,
// 	IndexRoute: { component: Home },
// 	childRoutes: [
// 		{
// 			path: 'about',
// 			getComponent(location, cb) {
// 				System.import('./routes/About')
// 					.then(module => cb(null, module.default));
// 			}
// 		},
// 		{
// 			path: 'portfolio',
// 			getComponent(location, cb) {
// 				System.import('./routes/Portfolio')
// 					.then(module => cb(null, module.default));
// 			}
// 		},
// 		{
// 			path: 'contact',
// 			getComponent(location, cb) {
// 				System.import('./routes/Contact')
// 					.then(module => cb(null, module.default));
// 			}
// 		}
// 	]
//
// };
//
// const Routes = () => {
// 	return (
// 		<Router history={hashHistory} routes={componentRoutes} />
// 	);
// };

const Routes = () => {
	return (
		<Router history={hashHistory} >
			<Route path='/' component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='about' component={About}></Route>
				<Route path='portfolio' component={Portfolio}></Route>
				<Route path='contact' component={Contact}></Route>
			</Route>
		</Router>
	);
};

export default Routes;
