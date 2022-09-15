import React, { useContext, useState } from 'react';
import { taskContext } from '../../App';
import FormData from 'form-data';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
	// user data from contex api
	const {tasks, users} = useContext(taskContext);
	// receive id
	const {id} = useParams();
	// find the specific task by id
	const task = tasks.tasks?.find(item => item.id === id);
	console.log(task.message)
	// token handler
	const token = {
		headers: { "Content-Type": "multipart/form-data" },
		'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
	  }
	// set state variable to handle submit data
	const [taskMessege, setTaskMessage] = useState('');
	const [assignName, setAssignName] = useState('');
	const [assignTo, setAssignTo] = useState('');
	const [taskDate, setTaskDate] = useState('');
	const [taskTime, setTaskTime] = useState('');
	const [priority, setPriority] = useState('');
	const date = new Date().toJSON().split('.')[0].split('T').join(' ')


	const onMessageChange = (e)=>{
		setTaskMessage(e.target.value)
	}
	const onDateChange = (e)=>{
		setTaskDate(e.target.value)
	}
	const onTimeChange = (e)=>{
		setTaskTime(e.target.value)
	}
	const onPriorityChange = (e)=>{
		setPriority(e.target.value)
	}
	const onAssignNameChange = (e)=>{
		setAssignName(e.target.value)		
	}
	const onAssignChange = (e)=>{
		setAssignTo(e.target.value)		
	}
		
	// submit handle
	const handleUpdate = (e) => {
		e.preventDefault();
		const dataForm = new FormData();
		dataForm.append( "created_on", task.created_on);
		dataForm.append( "due_date", taskDate);
		dataForm.append( "message", taskMessege ? taskMessege : task.message);
		dataForm.append( "priority", priority);
		dataForm.append( "assigned_name", assignName);
		dataForm.append( "assigned_to", assignTo);
		dataForm.append( "taskid", id);
		console.log(id)
		// console.log(taskMessege, taskDate, taskTime, priority, assignName, assignTo)
		const url = 'https://devza.com/tests/tasks/update';
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
		
	};
	return (
		<main className='min-h-screen'>

		<div className="p-2 shadow-lg rounded-md pt-16">
		<form className="flex flex-col gap-2" onSubmit={handleUpdate}>
			{/* messeges */}
			<input 
				defaultValue={task?.message} 
				onChange={onMessageChange} type="text" placeholder="Message" className="input input-bordered input-primary rounded-none w-full" required/>
			{/* date */}
				<input 
				defaultValue={task?.due_date} 
				onChange={onDateChange} type="text" placeholder="2023-09-13 15:00:19" className="input input-bordered input-primary rounded-none w-full" required/>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{/* priority */}
				<select  
				defaultValue={task?.priority} 
				onChange={onPriorityChange} 
				className="select select-bordered w-full">
					<option selected>Priority</option>
					<option value="1">Normal</option>
					<option value="2">Mid</option>
					<option value="3">High</option>
				</select>

				{/* assign to */}
				<select  
				defaultValue={task?.assigned_to} 
				onChange={onAssignChange} 
				className="select select-bordered w-full">
					<option selected>Assign to</option>
					{
                          users?.users?.map(user => 
						  <option key={user.id} value={user.id}>
							{user.name}
						  </option>)
                      }
				</select>

			</div>
			{/* assignt Name*/}
				<select 
				value={task?.assigned_name}
				onChange={onAssignNameChange}
				type="text"
				className="select select-bordered w-full">
                      <option selected>Assign Name</option>
                      {
                          users?.users?.map(user => 
						  <option key={user.id} value={user.name}>
							{user.name}
						  </option>)
                      }
                </select>
			
			
			<button type='submit' className="btn btn-primary input-bordered input-primary rounded-none">
				Add Task
			</button>
		</form>
	</div>
	</main>
	);
};

export default UpdateTask;