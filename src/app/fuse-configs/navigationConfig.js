import { authRoles } from 'app/auth';
import MaterialUIComponentsNavigation from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'Dashboards',
				title: 'Dashboards',
				translate: 'Dashboards',
				type: 'item',
				icon: 'home',
				url: '/dashboard'
			},
			
			{
				id: 'Users',
				title: 'Users',
				translate: 'Users',
				type: 'item',
				icon: 'people',
				url: '/apps/Users'
			},
			{
				id: 'Category',
				title: 'Category',
				type: 'item',
				translate: 'Category',
				icon: 'category',
				url: '/apps/Category',
				
			},
			{
				id: 'Product',
				title: 'Product',
				translate: 'Product',
				type: 'item',
				icon: 'layers',
				url: '/admin'
			},
			{
				id: 'Transaction',
				title: 'Transaction',
				translate: 'Transaction',
				type: 'item',
				icon: 'receipt',
				url: '/apps/Transaction',
				
			},
			{
				id: 'Report',
				title: 'Report',
				translate: 'Report',
				type: 'item',
				icon: 'assessment',
				url: '/apps/Report',
				
			},		]
	}
];

export default navigationConfig;
