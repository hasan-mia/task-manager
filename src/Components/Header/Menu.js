import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Menu = () => {
	return (
	<header className='px-1 lg:px-8 border-b bg-gray-900'>
		<div className="navbar justify-between">
			<div className="flex flex-col"> 
			<Link to="/" className="uppercase text-gray-50 font-semibold border p-1 lg:border-0 text-xl">
				Task-Manager
			</Link> 
			<p className='text-white'>{moment().format('Do MMMM YYYY')}</p>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0 text-gray-50">
					<li className='text-gray-50'><Link to="/">Home</Link></li>
					<li className='text-gray-50'><Link to="/task">Task List</Link></li>
				</ul>
			</div>
		</div>
	</header>
	);
};

export default Menu;