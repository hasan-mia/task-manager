import { createContext, useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Header/Menu";
import Home from "./Components/Home";
import UpdateTask from "./Components/UpdateTask/UpdateTask";
import useTask from "./Hooks/useTask";
import useUser from "./Hooks/useUser";

export const taskContext = createContext()

function App() {
  const{tasks, setTasks, isLoad, setIsLoad}=useTask();
  const {users, setUsers, userLoad, setUserLoad} = useUser();
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState();
  // =========Search handler========
  const searchHandler = (e) =>{
  setSearchText(e.target.value);
    }
    useEffect(() => {
      fetch('https://devza.com/tests/tasks/list',{method: 'GET', headers: {'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'}})
        .then(res => res.json())
        .then(data => {
          // console.log(data?.tasks)
            const finTask = data?.tasks.filter(task => (task.message).toLowerCase().includes(searchText));
            setSearchResult(finTask);
        })
    }, [searchText, tasks]);

  return (
    <taskContext.Provider value={{tasks, setTasks, isLoad, setIsLoad, users, setUsers, userLoad, setUserLoad, searchResult, searchHandler}}>
     <Menu></Menu>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/update/:id" element={<UpdateTask tasks={tasks}/>}/>
     </Routes>
     <Footer></Footer>
    </taskContext.Provider>
  );
}

export default App;
