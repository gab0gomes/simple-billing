import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router';

// import Dashboard from '../dashboard/dashboard';
import DashboardNoRedux from '../dashboardNoRedux/dashboardNoRedux';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
	<Router history={ hashHistory }>
		{/* <Route path='/' component={ Dashboard }/> */}
		<Route path='/' component={ DashboardNoRedux }/>
		<Route path='/billingCycles' component={ BillingCycle }/>
		<Redirect from='*' to='/'/>
	</Router>
);