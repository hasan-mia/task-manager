import React, {useContext, useState } from 'react';
import { todoContext } from '../../App';

const AddTodo = () => {
	const [todoItem, setTodoItem] = useState('');
	const {setIsLoad} = useContext(todoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const todo = todoItem;
	
		const url = 'https://todotask-management.herokuapp.com/todo';
		fetch(url, {
			method: 'POST',
			headers: {'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify({todo}),
		})
		.then((response) => response.json())
		.then(data => {console.log(data);setIsLoad(true);setTodoItem('')});
	};
	return (
		<form className="flex" onSubmit={handleSubmit}>
			<input value={todoItem} onChange={event => setTodoItem(event.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary rounded-none w-full" required/>
			<button type='submit' className="btn btn-primary input-bordered input-primary rounded-none">
				Add
			</button>
		</form>
	);
};

export default AddTodo;