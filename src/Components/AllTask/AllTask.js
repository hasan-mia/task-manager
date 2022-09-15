import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { taskContext } from '../../App';

const AllTask = () => {
	// all tasks
	const {tasks} = useContext(taskContext);
	// data filter 
	const[priorityBase, setPriorityBase]=useState(tasks?.tasks);
	const [hight, setHigh] = useState([])
	
	// High Priority task
	const highPriority = tasks?.tasks.find(element => {
		return (element.priority == 3)
	});
	console.log(highPriority)

	// Medium Priority task
	const mediumPriority = tasks?.tasks.find(element => {
		return (element.priority == 2)
	});
	console.log(mediumPriority)

	// Low Priority task
	const lowPriority = tasks?.tasks.find(element => {
		return (element.priority == 1)
	});
	console.log(lowPriority)

	// update route navigator
	const updateTask = useNavigate();
	const token = {
		'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
	}
	const deleteTask = (id)=>{
		const dataForm = new FormData();
		dataForm.append( "taskid", id);
		const url = 'https://devza.com/tests/tasks/delete';
		axios({
			method: 'post',
			headers: token,
			url: url,
			data : dataForm
			
		})
		.then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
	return (
		<div className='min-h-screen'>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
				{
					tasks.tasks?.map( task => 
					<div key={task.id} className="card shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{task?.assigned_name}</h2>
							<p>{task?.message}</p>
							<div className="card-actions justify-end">
								<button onClick={()=>deleteTask(task.id)} className="btn btn-error text-gray-50">Delete</button>
								<button onClick={()=>updateTask(`/update/${task.id}`)} className="btn btn-primary">Update</button>
							</div>
						</div>
					</div>
					)
				}
{/* 		
				<div>
				<button>High</button>
					{
					tasks.tasks?.map( task => 
					<div key={task.id} className="card shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{task?.assigned_name}</h2>
							<p>{task?.message}</p>
							<div className="card-actions justify-end">
								<button onClick={()=>deleteTask(task.id)} className="btn btn-error text-gray-50">Delete</button>
								<button onClick={()=>updateTask(`/update/${task.id}`)} className="btn btn-primary">Update</button>
							</div>
						</div>
					</div>
					)}
				</div>

				<div>
				<button>Medium</button>
					{
					tasks.tasks?.map( task => 
					<div key={task.id} className="card shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{task?.assigned_name}</h2>
							<p>{task?.message}</p>
							<div className="card-actions justify-end">
								<button onClick={()=>deleteTask(task.id)} className="btn btn-error text-gray-50">Delete</button>
								<button onClick={()=>updateTask(`/update/${task.id}`)} className="btn btn-primary">Update</button>
							</div>
						</div>
					</div>
					)}
				</div>

				<div>
				<button>Low</button>
					{
					tasks.tasks?.map( task => 
					<div key={task.id} className="card shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{task?.assigned_name}</h2>
							<p>{task?.message}</p>
							<div className="card-actions justify-end">
								<button onClick={()=>deleteTask(task.id)} className="btn btn-error text-gray-50">Delete</button>
								<button onClick={()=>updateTask(`/update/${task.id}`)} className="btn btn-primary">Update</button>
							</div>
						</div>
					</div>
					)}
				</div>
		 */}
			</div>
		</div>
	);
};

export default AllTask;