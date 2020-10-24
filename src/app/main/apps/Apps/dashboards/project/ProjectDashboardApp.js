import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import Widget1 from './widgets/Widget1';
import Widget10 from './widgets/Widget10';
import Widget11 from './widgets/Widget11';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import WidgetNow from './widgets/WidgetNow';
import WidgetWeather from './widgets/WidgetWeather';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(({ projectDashboardApp }) => projectDashboardApp.widgets);
	const projects = useSelector(({ projectDashboardApp }) => projectDashboardApp.projects);

	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const [tabValue, setTabValue] = useState(0);
	const [selectedProject, setSelectedProject] = useState({
		id: 1,
		menuEl: null
	});

	useEffect(() => {
		dispatch(Actions.getWidgets());
		dispatch(Actions.getProjects());
	}, [dispatch]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChangeProject(id) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	function handleOpenProjectMenu(event) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
	}

	if (!widgets || !projects) {
		return null;
	}

	return (
		<FusePageSimple
			classes={{
				header: 'min-h-160 h-160',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			content={
				<div className="p-12">
					{tabValue === 0 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full  sm:w-1/1 md:w-1/3 p-12" >
								<Widget1 widget={widgets.widget1} />
							</div>
							<div className="widget flex w-full sm:w-1/1 md:w-1/3 p-12">
								<Widget2 widget={widgets.widget2} />
							</div>
							<div className="widget flex w-full sm:w-1/1 md:w-1/3 p-12">
								<Widget3 widget={widgets.widget3} />
							</div>
							<div className="widget flex w-full sm:w-1/1 md:w-1/2 p-12">
								<Widget5 widget={widgets.widget5} />
							</div>
							<div className="widget flex w-full sm:w-1/1 md:w-1/2 p-12">
								<Widget11 widget={widgets.widget11} />
							</div>
						</FuseAnimateGroup>
					)}
			
					</div>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
