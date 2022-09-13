import { useEffect, useState } from "react";

const useTodo = () => {
	const [todos, setTodos] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('https://todotask-management.herokuapp.com/todos')
		.then((res) => res.json())
        .then((data) => setTodos(
        data, setIsLoad(false)));
    }, [todos])

    return {todos, setTodos, isLoad, setIsLoad}
};

export default useTodo;