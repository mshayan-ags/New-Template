import React from 'react';

const FileManagerAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/MainUI',
			component: React.lazy(() => import('./full-width-2-tabbed'))
		}
	]
};

export default FileManagerAppConfig;
