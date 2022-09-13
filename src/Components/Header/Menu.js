import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
	<header className='px-1 lg:px-8 border-b'>
		<div className="navbar bg-base-100">
			<div className="flex-1"> <Link to="/" className="uppercase font-semibold border p-1 lg:border-0 text-xl">To-Do</Link> </div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li><Link to="/completed">Completed</Link></li>
					<li><Link to="/todo">To-Do</Link></li>
					<li><Link to="/calendar">Calendar</Link></li>
				</ul>
			</div>
		</div>
	</header>
	);
};

export default Menu;