import React from 'react';
import { useContext } from 'react';
import { taskContext } from '../App';
import AddTask from './AddTask/AddTask';
import AllTask from './AllTask/AllTask';
import SearchResult from './SearchResult';

const Home = () => {
	const {searchResult} = useContext(taskContext);
	return (
		<main className='px-4 lg:px-8 py-8 w-full min-h-screen'>
			<div className='flex flex-wrap flex-row justify-center'>

				<div className='flex-shrink w-full px-0 my-2 w-12/12 md:w-6/12 lg:w-3/12 xl:px-2 border lg:border-0'>
					
					<div className='fixed mt-12'>
						<h2 className='uppercase pb-2 text-center lg:text-left font-semibold text-xl'>ADD YOUR TASK</h2>
						<AddTask></AddTask>
					</div>
				</div>

				<div className='flex-shrink w-full px-0 my-2 w-12/12 md:w-6/12 lg:w-9/12 xl:px-2 border lg:border-0'>
					<div className="mt-12">
					<h2 className='uppercase mt-6 lg:mt-0 pb-2 text-center lg:text-left font-semibold text-xl'>YOUR TASK LIST</h2>
					{
					searchResult?.length === 0 ? <AllTask></AllTask> : <SearchResult/> 
					}
					</div>
				</div>
				
			</div>
			

		</main>
	);
};

export default Home;