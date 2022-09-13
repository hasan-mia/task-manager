import React from 'react';
import AllTodo from '../AllTodo/AllTodo';

const Todo = () => {
	return (
		<main>
			<div className='px-4 lg:px-14 py-8 w-full'>
					{/* <div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase mt-6 lg:mt-0 pb-2 text-center lg:text-left'>YOUR TASK LIST</h2>
					</div> */}

					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
						<AllTodo></AllTodo>
					</ul>
			</div>
		</main>
	);
};

export default Todo;