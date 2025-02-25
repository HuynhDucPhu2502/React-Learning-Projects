import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

type Props = {
  handleNewProject: () => void;
};

const NoProjectSelected: React.FC<Props> = ({ handleNewProject }) => {
  return (
    <div className="flex flex-col items-center my-12 w-1/2 h-screen space-y-4">
      <img src={noProjectImg} alt="no project img" className="w-[8rem]" />
      <p className="text-gray-700 font-bold text-2xl">No Project Selected</p>
      <p className="text-gray-500 text-lg">
        Select a project or get started with a new one
      </p>
      <Button onClick={handleNewProject} title="Create new project" />
    </div>
  );
};

export default NoProjectSelected;
