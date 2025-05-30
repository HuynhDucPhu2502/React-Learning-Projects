import Tasks from "./Tasks";
type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

type Task = {
  id: number;
  content: string;
  projectId: number;
};

type Props = {
  project: Project;
  tasks: Task[];
  handleDeleteProject: (projectId: number) => void;
  handleSaveNewTask: (task: Task) => void;
  handleDeleteTask: (taskId: number) => void;
};

const SelectedProject: React.FC<Props> = ({
  project,
  handleDeleteProject,
  tasks,
  handleSaveNewTask,
  handleDeleteTask,
}) => {
  const parsedDate = new Date(project.dueDate);

  const formattedDate = parsedDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col w-1/2 h-screen">
      <div className="flex flex-row justify-between mt-12">
        <h1 className="text-5xl font-extrabold">{project.title}</h1>
        <button
          onClick={() => handleDeleteProject(project.id)}
          className="text-red-500 hover:text-red-400 text-lg  hover:-translate-y-0.5"
        >
          Delete
        </button>
      </div>
      <p className="text-lg text-gray-500 my-4">{formattedDate}</p>
      <p className="whitespace-pre-wrap">{project.description}</p>
      <hr className="border-b-2 border-gray-200 my-4" />
      <Tasks
        projectId={project.id}
        handleSaveNewTask={handleSaveNewTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </div>
  );
};

export default SelectedProject;
