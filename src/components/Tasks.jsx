import { Check, Trash2, ChevronRight } from "lucide-react";
import { useNavigate, useNavigation } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();
  const showDetails = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  };

  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow w-full">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex space-x-4">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={
              'bg-slate-400 p-2 rounded-md w-full flex ${task.isCompleted && "line-through"}'
            }
          >
            {task.isCompleted ? <Check className="mx-2" /> : ""}
            {task.title}
          </button>
          <button
            onClick={() => showDetails(task)}
            className="bg-slate-400 p-2 rounded-md"
          >
            <ChevronRight />
          </button>
          <button
            onClick={() => props.deleteTasks(task.id)}
            className="bg-slate-400 p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
