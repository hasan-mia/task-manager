import React, { useContext, useState } from 'react';
import { todoContext } from '../../App';

const UpdateTodo = ({updateId, setUpdateId}) => {
	const [todoItem, setTodoItem] = useState('');
	const {todos, setTodos, setIsLoad} = useContext(todoContext);

	// // Get Specific Item With ID
	const todoElement = todos.find(item => item._id === updateId);
	const {todo, _id} = todoElement;

	const handleUpdate = (e) => {
		e.preventDefault();
		const todo = todoItem;

		const url = `https://todotask-management.herokuapp.com/todo/${_id}`;
		fetch(url, {
			method: 'PATCH',
			headers: {'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify({todo}),
		})
		.then((response) => response.json())
		.then(data => {console.log(data);setIsLoad(true);setTodoItem('')});
	};
	return (
		<>
		<input type="checkbox" id="update-modal" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box relative">
				<label for="update-modal" class="btn btn-sm btn-circle bg-primary hover:bg-primary absolute right-2 top-2 text-sm">✕</label>
				<form className="flex p-4" onSubmit={handleUpdate}>
					<input defaultValue={todo} onChange={event => setTodoItem(event.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary rounded-none w-full" required/>
					<button type='submit' className="btn btn-primary input-bordered input-primary rounded-none">
						Add
					</button>
				</form>
			</div>
		</div>
		</>
	);
};

export default UpdateTodo;