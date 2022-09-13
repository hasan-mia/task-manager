import React from 'react';
import AddTask from './AddTask/AddTask';
import AllTask from './AllTask/AllTask';

const Home = () => {
	
	return (
		<main className='px-4 lg:px-8 py-8 w-full'>
			<div className='flex flex-wrap flex-row justify-center'>

				<div className='flex-shrink w-full px-0 my-2 w-12/12 sm:w-12/12 md:w-6/12 lg:w-3/12 xl:px-6 border lg:border-0 left-siebar'>
					<div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase pb-2 text-center lg:text-left'>ADD YOUR TASK</h2>
					</div>
					<div>
						<AddTask></AddTask>
					</div>
				</div>

				<div className='flex-shrink w-full px-0 my-2 w-12/12 sm:w-12/12 md:w-6/12 lg:w-9/12 xl:px-6 border lg:border-0'>
					<div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase mt-6 lg:mt-0 pb-2 text-center lg:text-left'>YOUR TASK LIST</h2>
					</div>

					<ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>
						<AllTask></AllTask>
						{/* {
							todos.map((item, index)=>{
								<AllTodo
								key={index}
								item={item}
								/>
							})
						} */}
					</ul>
				</div>
				
			</div>
			

		</main>
	);
};

export default Home;