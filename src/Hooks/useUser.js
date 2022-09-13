import { useEffect, useState } from "react";

const useUser = () => {
	const [users, setUsers] = useState([])
    const [userLoad, setUserLoad] = useState(true)
	useEffect(() => {
		fetch('https://devza.com/tests/tasks/listusers',{method: 'GET', headers: {'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'}})
		.then((res) => res.json())
        .then((data) => setUsers(
        data, setUserLoad(false)));
    }, [users])

    return {users, setUsers, userLoad, setUserLoad}
};

export default useUser;