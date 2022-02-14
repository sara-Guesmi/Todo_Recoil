import "./App.css";
import AddTask from "./Components/AddTask";
import Filter from "./Components/Filter";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <Filter />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
