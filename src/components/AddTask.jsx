import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow w-full flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Digite a Descricao da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor preencha os espacos em branco");
          }
          props.onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 p-2 rounded-md"
        type="submit"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
