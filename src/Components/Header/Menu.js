import React from 'react';
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import moment from 'moment';
import { useContext } from 'react';
import { taskContext } from '../../App';

const Menu = () => {
	const {searchHandler} = useContext(taskContext)
	return (
	<header className='px-1 lg:px-8 border-b border-gray-300 bg-gray-100 fixed w-full z-10'>
		<div className="navbar justify-between">
			<div className="flex flex-col"> 
			<Link to="/" className="uppercase text-gray-900 font-semibold border p-1 lg:border-0 text-xl">
				Task-Manager
			</Link> 
			<p className='text-gray-800'>{moment().format('Do MMMM YYYY')}</p>
			</div>
			
			<div className="flex-start">
				<ul className="menu menu-horizontal p-0 text-gray-700">
					<li className='text-gray-700 hover:border-b-2'><Link to="/">Home</Link></li>
				</ul>
			</div>
			<div className='flex-end relative'>
                <input onChange={searchHandler} type="text" placeholder="Search Profile" className="rounded p-2 bg-main border text-color border-gray-200 hover:border-gray-200 w-full px-2 lg:px-8" />
                <p><FiSearch className='text-black absolute bottom-3 right-2 z-10 text-xl mx-2 hover:border-gray-200'/></p>
            </div>
		</div>
	</header>
	);
};

export default Menu;