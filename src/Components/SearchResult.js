import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { taskContext } from '../App';

const SearchResult = () => {
    const {searchResult} = useContext(taskContext);
    console.log(searchResult)
	const updateTask = useNavigate();
		// receive id
        const {id} = useParams();
        // token handler
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {
            searchResult?.map( task => 
                <div key={task.id} className="card w-full bg-base-100 shadow-xl">
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
    </div>
    </div>
    );
};

export default SearchResult;