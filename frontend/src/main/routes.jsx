import React from 'react'
import {
	Router,
	Route,
	IndexRoute,
	Redirect,
	hashHistory,
} from 'react-router';

// import Dashboard from '../dashboard/dashboard';
import App from './app';
import DashboardNoRedux from '../dashboardNoRedux/dashboardNoRedux';
import BillingCycle from '../billingCycle/billingCycle';
import dashboard from '../dashboard/dashboard';

export default props => (
	<Router history={ hashHistory }>
		<Route path='/' component={ App }>
			<IndexRoute component={ dashboard }/>
			<Route path='/billingCycles' component={ BillingCycle }/>
		</Route>
		{/* <Route path='/' component={ Dashboard }/> */}
		{/* <Route path='/' component={ DashboardNoRedux }/> */}
		<Redirect from='*' to='/'/>
	</Router>
);