import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const retrieve = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //     );
  //     const data = await response.json();
    
  //   setTasks(data)
  //   };
  //   retrieve();
  // }, []);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function deleteTasks(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen  flex justify-center">
        <div className="w-[500px] flex flex-col items-center  space-y-2">
          <h1 className="flex justify-center text-3xl p-4 text-white font-bold">
            Gerenciador de Tarefas
          </h1>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            deleteTasks={deleteTasks}
          />
        </div>
      </div>
    </>
  );
}

export default App;
