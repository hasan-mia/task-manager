import React, { useContext } from 'react';
import { todoContext } from '../../App';

const Completed = () => {
	const {completes, setCompletes, setIsLoad} = useContext(todoContext);

	const handleDelete = id =>{
		const url = `https://todotask-management.herokuapp.com/complete/${id}`;
		fetch(url, {
			method: 'DELETE',
			headers: {'content-type': 'application/json'}
		})
		.then(res => res.json())
		.then(data =>{
			if(data.deletedCount > 0){
				const remaining = completes.filter(complete => complete._id !== id);
                setCompletes(remaining);
				setIsLoad(true);
			}
		})
	}
	// if (isLoad) {
	// 	return <p className='text-center text-lg text-green-700 font-semibold uppercase'>Loading</p>
	// }
	return (
		<main className='px-4 lg:px-14 py-8 w-full'>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
				{
					completes.map(item=>
						<li key={item._id} className='flex justify-between items-center border border-primary px-2 py-1 rounded-md'>
							<input type="checkbox" checked="checked" className="checkbox checkbox-primary"/>

							<h2 className='px-2 py-1 text-lg'>{item.todo}</h2>
							<button onClick={()=>handleDelete(item._id)} className="cursor-pointer">
								<i className="far fa-trash-alt text-xl text-red-500"></i>
							</button>
						</li>
					)
				}
				
			</ul>
		</main>
	);
};

export default Completed;