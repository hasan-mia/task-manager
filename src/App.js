import { createContext} from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calender/Calendar";
import Completed from "./Components/Completed/Completed";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Header/Menu";
import Home from "./Components/Home";
import Todo from "./Components/Todo/Todo";
import useComplete from "./Hooks/useComplete";
import useTodo from "./Hooks/useTodo";

export const todoContext = createContext()

function App() {
  const{todos, setTodos, isLoad, setIsLoad}=useTodo();
  const{completes, setCompletes}=useComplete()
  return (
    <todoContext.Provider value={{todos, setTodos, completes, setCompletes, isLoad, setIsLoad}}>
     <Menu></Menu>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/completed" element={<Completed/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
     </Routes>
     <Footer></Footer>
    </todoContext.Provider>
  );
}

export default App;
