import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { taskContext } from '../../App';

const Updated = ({tasks}) => {
	// const {tasks}= useContext(taskContext);
	console.log(tasks)
	const {id}= useParams()
	return (
		<main className='px-4 lg:px-14 py-8 w-full'>

		</main>
	);
};

export default Updated;