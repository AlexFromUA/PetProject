import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DepartmentsList from './Departments/DepartmentsList';
import * as Router from "react-router-dom";
import HomePage from './HomePage';
import EmployeeList from './Employees/EmployeesList';
import Layout from './Layout';
import DepartmentDetails from "./Departments/DepartmentDetails";
import {Provider} from "react-redux";
import {store} from './Store';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from "./RelayEnvironment";
import EmployeeDetails from './Employees/EmployeeDetails';

const routes = Router.createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <HomePage/>
			},
			{
				path: "Departments",
				element: <DepartmentsList/>,
			},
			{
				path: 'DepartmentDetails/:depId',
				element: <DepartmentDetails/>
			},
			{
				path: "Employees",
				element: <EmployeeList/>
			},
			{
				path: "EmployeeDetails/:empId",
				element: <EmployeeDetails/>,
			},
		]
	}
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<RelayEnvironmentProvider environment={RelayEnvironment}>
		<Suspense fallback={'Loading...'}>
			{/*<Provider store={store}>*/}
				<Router.RouterProvider router={routes}/>
			{/*</Provider>*/}
		</Suspense>
	</RelayEnvironmentProvider>
);