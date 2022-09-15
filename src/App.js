import { createContext} from "react";
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
  return (
    <taskContext.Provider value={{tasks, setTasks, isLoad, setIsLoad, users, setUsers, userLoad, setUserLoad}}>
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
