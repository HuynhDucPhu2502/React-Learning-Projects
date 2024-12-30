import { useRef } from "react";
import Modal from "./Modal";

type Task = {
  id: number;
  content: string;
  projectId: number;
};

type Props = {
  projectId: number;
  tasks: Task[];
  handleSaveNewTask: (task: Task) => void;
  handleDeleteTask: (taskId: number) => void;
};

type ModalHandle = {
  open: () => void;
};

const Tasks: React.FC<Props> = ({
  projectId,
  tasks,
  handleSaveNewTask,
  handleDeleteTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandle>(null);

  const handleAddTask = () => {
    if (!inputRef.current) return;

    const contentStr = inputRef.current.value;

    if (contentStr.trim() === "") {
      modalRef.current?.open();
      return;
    }

    const newTask: Task = {
      id: Math.random(),
      content: contentStr,
      projectId,
    };

    handleSaveNewTask(newTask);
    inputRef.current.value = "";
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-red-500 font-extrabold text-3xl">Invalid Input</h2>
        <p className="text-gray-500">
          Opps... Maybe you forgot to fill something.
        </p>
        <p className="text-gray-500">Please write the task.</p>
      </Modal>
      <h2 className="text-xl font-bold">Tasks</h2>
      <div className="flex flex-row my-4 space-x-4">
        <input
          ref={inputRef}
          type="text"
          className="bg-gray-200 px-4 py-2 w-3/4"
        />
        <button
          onClick={handleAddTask}
          className="w-1/4 bg-slate-600 text-white rounded-lg hover:-translate-y-0.5 hover:shadow-lg"
        >
          Add Task
        </button>
      </div>
      <ul className="bg-gray-200 min-h-64 max-h-screen w-full overflow-y-auto px-8 py-4 rounded-lg space-y-4">
        {tasks.map((task) => (
          <li className="flex flex-row justify-between text-md" key={task.id}>
            <p>{task.content}</p>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-400 text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
