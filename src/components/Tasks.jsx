import { Check, Trash2 } from "lucide-react";
import { ChevronRight } from "lucide-react";

function Tasks(props) {
    console.log(Array.isArray(props.tasks))
  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow w-full">
      {props.tasks.map((task) => 
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
          <button className="bg-slate-400 p-2 rounded-md">
            <ChevronRight />
          </button>
          <button
            onClick={() => props.deleteTasks(task.id)}
            className="bg-slate-400 p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      )}
    </ul>
  );
}

export default Tasks;
