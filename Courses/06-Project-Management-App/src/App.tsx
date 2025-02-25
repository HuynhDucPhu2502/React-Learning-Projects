import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import "./index.css";

import { useState } from "react";

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

type ProjectState = {
  selectedProjectId: number | null | undefined;
  projects: Array<Project>;
  tasks: Array<Task>;
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleNewProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleSaveNewProject = (project: Project) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: project.id,
        projects: [...prevState.projects, project],
      };
    });
  };

  const handleDeleteProject = (projectId: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((x) => x.id !== projectId),
        selectedProjectId: undefined,
        tasks: prevState.tasks.filter((x) => x.projectId !== projectId),
      };
    });
  };

  const handleSaveNewTask = (task: Task) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, task],
      };
    });
  };

  const handleDeleteTask = (taskId: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((x) => x.id !== taskId),
      };
    });
  };

  const handleCancelNewProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (projectId: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  let content: React.ReactNode | null = null;
  if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected handleNewProject={handleNewProject} />;
  else if (projectsState.selectedProjectId === null)
    content = (
      <NewProject
        handleCancelNewProject={handleCancelNewProject}
        handleSaveNewProject={handleSaveNewProject}
      />
    );
  else
    content = (
      <SelectedProject
        project={
          projectsState.projects.find(
            (x) => x.id === projectsState.selectedProjectId
          )!
        }
        handleDeleteProject={handleDeleteProject}
        handleDeleteTask={handleDeleteTask}
        handleSaveNewTask={handleSaveNewTask}
        tasks={projectsState.tasks.filter(
          (x) => x.projectId === projectsState.selectedProjectId
        )}
      />
    );

  return (
    <div className="flex flex-row my-4 space-x-4">
      <ProjectsSidebar
        handleNewProject={handleNewProject}
        handleSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
