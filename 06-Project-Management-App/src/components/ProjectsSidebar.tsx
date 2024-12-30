import Button from "./Button";

type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

type Props = {
  handleNewProject: () => void;
  projects: Array<Project>;
  handleSelectProject: (projectId: number) => void;
  selectedProjectId: number | null | undefined;
};

const ProjectsSidebar: React.FC<Props> = ({
  handleNewProject,
  projects,
  handleSelectProject,
  selectedProjectId,
}) => {
  return (
    <div className="w-1/4 h-screen p-12 bg-black rounded-tr-md rounded-br-md">
      <h1 className="text-2xl text-white font-bold">YOUR PROJECTS</h1>
      <Button onClick={handleNewProject} title="+ Add Project" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => handleSelectProject(project.id)}
              className={`p-2 text-lg text-left text-gray-400 w-full rounded-lg mb-2 ${
                selectedProjectId && project.id === selectedProjectId
                  ? "text-white bg-slate-100 bg-opacity-40"
                  : "hover:text-white hover:bg-slate-100 hover:bg-opacity-40"
              }`}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSidebar;
