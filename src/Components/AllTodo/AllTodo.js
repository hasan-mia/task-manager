import React, { useContext, useState } from 'react';
import { todoContext } from '../../App';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const AllTodo = () => {
	const {todos, setTodos, setIsLoad} = useContext(todoContext);
	const [updateId, setUpdateId] = useState('')

	// =========Add to Complete Task========
	const handleComplete = (id) => {
		// Get Selected Item
		const completeItem = todos.find(item=>item._id == id)
		// console.log({...completeItem});
		const complete = {...completeItem};
		console.log({...complete});
	
		const url = 'https://todotask-management.herokuapp.com/complete';
		fetch(url, {
			method: 'POST',
			headers: {'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify({...complete}),
		})
		.then((response) => response.json())
		.then(data => {console.log(data);setIsLoad(true)});
	};

// =========Remove Task after added========
	const handleRemove = id =>{
		const url = `https://todotask-management.herokuapp.com/todo/${id}`;
		fetch(url, {
			method: 'DELETE',
			headers: {'content-type': 'application/json'}
		})
		.then(res => res.json())
		.then(data =>{
			if(data){
				const remaining = todos.filter(todo => todo._id !== id);
                setTodos(remaining);
				// setIsLoad(true);
			}
		})
	}
// =========Edit Task========
	const handleEdit = (id) =>{
        setUpdateId(id);
	}
	// if (isLoad) {
	// 	return <p className='text-center text-lg text-green-700 font-semibold uppercase'>Loading</p>
	// }
	return (
		<>
		{
			todos.map(item=>
				<>
				<li key={item._id} className='flex justify-between items-center border border-primary px-2 py-1 rounded-md'>
					<input type="checkbox" onClick={()=>{handleComplete(item._id); handleRemove(item._id)}} className="checkbox checkbox-primary"/>
					<h2 className='px-2 py-1 text-lg'>{item.todo}</h2>
					{/* Modal Button */}
					<label onClick={()=>handleEdit(item._id)} for="update-modal" className="cursor-pointer">
						<i className="far fa-edit text-xl text-blue-700"></i>
					</label>
				</li>
				{/* ====Main Modal==== */}
				{updateId && <UpdateTodo
					updateId={updateId}
					setUpdateId={setUpdateId}
				></UpdateTodo>}
				</>
			)
		}
		</>
	);
};

export default AllTodo;