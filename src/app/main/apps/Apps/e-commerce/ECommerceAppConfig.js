import React from 'react';
import { Redirect } from 'react-router-dom';

const ECommerceAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/admin/products/:productId/:productHandle?',
			component: React.lazy(() => import('./product/Product'))
		},
		{
			path: '/admin/products',
			component: React.lazy(() => import('./products/Products'))
		},
		{
			path: '/admin',
			component: () => <Redirect to="/admin/products" />
		}
	]
};

export default ECommerceAppConfig;
