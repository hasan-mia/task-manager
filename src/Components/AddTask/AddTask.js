import React, {useContext, useState } from 'react';
import { taskContext } from '../../App';
import FormData from 'form-data';
import axios from 'axios'

const AddTask = () => {
	// user data from contex api
	const {users} = useContext(taskContext);
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
	const handleSubmit = (e) => {
		e.preventDefault();
		const dataForm = new FormData();
		dataForm.append( "created_on", date);
		dataForm.append( "due_date", taskDate);
		dataForm.append( "message", taskMessege);
		dataForm.append( "priority", priority);
		dataForm.append( "assigned_name", assignName);
		dataForm.append( "assigned_to", assignTo);
		
		// console.log(taskMessege, taskDate, taskTime, priority, assignName, assignTo)
		const url = 'https://devza.com/tests/tasks/create';
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
		<div className="p-2 shadow-lg rounded-md">
		<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
			{/* messeges */}
			<input 
				defaultValue={taskMessege} 
				onChange={onMessageChange} type="text" placeholder="Message" className="input input-bordered input-primary rounded-none w-full" required/>
			
				<input 
				defaultValue={`2022-09-13 15:00:19`} 
				onChange={onDateChange} type="text" placeholder="2023-09-13 15:00:19" className="input input-bordered input-primary rounded-none w-full" required/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{/* date */}
			
				{/* date */}
				{/* <input 
				defaultValue={taskTime} 
				onChange={onTimeChange} type="time" placeholder="text" className="input input-bordered input-primary rounded-none w-full md:w-1/2" required/>
				 */}
				{/* priority */}
				<select  
				defaultValue={priority} 
				onChange={onPriorityChange} 
				className="select select-bordered w-full">
					<option selected>Priority</option>
					<option value="1">Normal</option>
					<option value="2">Mid</option>
					<option value="3">High</option>
				</select>

				{/* assign to */}
				<select  
				defaultValue={assignTo} 
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
				value={assignName}
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
			
			
			<button type='submit' className="btn btn-outline input-bordered input-primary rounded-none">
				Add Task
			</button>
		</form>
	</div>
	);
};

export default AddTask;