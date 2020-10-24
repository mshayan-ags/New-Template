import Card from './Card';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import Sidebar from "./Checkout/Checkout"
const useStyles = makeStyles({
	layoutRoot: {}
});

function CardedFullWidth2TabbedSample() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, value) => {
		setSelectedTab(value);
	};

	return (
		<div className="flex flex-wrap">
			<div className="widget flex w-full  sm:w-1/1 md:w-2/3 p-12">
					<FusePageCarded
				classes={{
					root: classes.layoutRoot,
					toolbar: 'p-0'
				}}
				contentToolbar={
					<Tabs
						value={selectedTab}
						onChange={handleTabChange}
						indicatorColor="primary"
						textColor="primary"
						variant="scrollable"
						scrollButtons="off"
						className="w-full h-64"
					>
						<Tab className="h-64" label="All" />
						<Tab className="h-64" label="Desserts" />
						<Tab className="h-64" label="Drinks" />
						<Tab className="h-64" label="Main Course" />
					</Tabs>
				}
				content={
					<div className="p-24">
						{selectedTab === 0 && (
							<div>
								<h3 className="mb-16">All</h3>
								<Card />
							</div>
						)}
						{selectedTab === 1 && (
							<div>
								<h3 className="mb-16">Desserts</h3>
								<Card />
							</div>
						)}
						{selectedTab === 2 && (
							<div>
								<h3 className="mb-16">Drinks</h3>
								<Card />
							</div>
						)}
						{selectedTab === 3 && (
							<div>
								<h3 className="mb-16">Main Course</h3>
								<Card />
							</div>
						)}
					</div>
				}
				innerScroll
			/>
			</div>
			<div className="widget flex w-full  sm:w-1/1 md:w-1/3 p-12">
			<FusePageCarded 
			content={
				<Sidebar />
			}
			
			/>
			</div>
		
		</div>
	);
}

export default CardedFullWidth2TabbedSample;
