import { useEffect, useState } from "react";

const useTask = () => {
	const [tasks, setTasks] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('https://devza.com/tests/tasks/list',{method: 'GET', headers: {'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'}})
		.then((res) => res.json())
        .then((data) => setTasks(
        data, setIsLoad(false)));
    }, [tasks])

    return {tasks, setTasks, isLoad, setIsLoad}
};

export default useTask;