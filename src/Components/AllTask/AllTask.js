import React, { useContext } from 'react';
import { taskContext } from '../../App';

const AllTask = () => {
	const {tasks} = useContext(taskContext)
	// console.log(tasks?.tasks)
	// console.log(task)
	return (
		<div className='min-h-screen'>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
			{
				tasks.tasks?.map( task => 
					<div key={task.id} className="card w-full bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{task?.assigned_name}</h2>
							<p>{task?.message}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-error text-gray-50">Delete</button>
								<button className="btn btn-primary">Update</button>
							</div>
						</div>
					</div>
				)
			}
		</div>
		</div>
	);
};

export default AllTask;