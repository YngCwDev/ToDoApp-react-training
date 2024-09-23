import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow w-full flex flex-col">
      <input
        type="text"
        className="w-full border-slate-300 rounded-md p-2 outline-slate-400"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type="text"
        className="w-full border-slate-300 rounded-md p-2 outline-slate-400"
        placeholder="Digite a Descricao da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button
        onClick={() => {
          props.onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 p-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
