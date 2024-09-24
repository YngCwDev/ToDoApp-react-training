import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="bg-slate-900 w-screen h-screen  flex  flex-col  items-center  text-slate-800">
      <div className="w-[500px] flex flex-col items-center ">
      <div className="flex justify-center items-center w-full relative">
        <button onClick={() => navigate(-1)} className="absolute left-0 py-4 text-3xl text-slate-200">
            <ChevronLeft/>
        </button>
        <h1 className="flex justify-center text-3xl p-4 text-white font-bold">
          Gerenciador de Tarefas
        </h1>
      </div>
      <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow w-full flex flex-col  ">
        <h2 className="font-bold text-[18px]">{title}</h2>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
}

export default TaskPage;
