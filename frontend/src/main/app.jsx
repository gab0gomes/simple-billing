import '../common/template/dependecies';
import React from 'react';

import Header from '../common/template/header';
import Sidebar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/message/messages';

export default props => (
	<div className='wrapper'>
		<Header/>
		<Sidebar/>
		<div className="content-wrapper">
			<Routes/>
		</div>
		<Footer/>
		<Messages/>
	</div>
);

