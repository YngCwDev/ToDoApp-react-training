import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar react e suas funcinalidades",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Python",
      description: "Estudar Python e suas funcinalidades",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Django",
      description: "Estudar Django e suas funcinalidades",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar Django",
      description: "Estudar Django e suas funcinalidades",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Estudar Django",
      description: "Estudar Django e suas funcinalidades",
      isCompleted: false,
    },
  ]);

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

  return (
    <>
      <div className="bg-slate-900 w-screen h-screen  flex justify-center">
        <div className="w-[500px] flex flex-col items-center">
          <h1 className="flex justify-center text-3xl p-4 text-white font-bold">
            Gerenciador de Tarefas
          </h1>
          <AddTask />
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