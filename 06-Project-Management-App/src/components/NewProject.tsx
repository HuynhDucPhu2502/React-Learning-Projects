import { useRef } from "react";
import InputField from "./InputField";
import Modal from "./Modal";

type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

type ModalHandle = {
  open: () => void;
};

type Props = {
  handleSaveNewProject: (project: Project) => void;
  handleCancelNewProject: () => void;
};

const NewProject: React.FC<Props> = ({
  handleCancelNewProject,
  handleSaveNewProject,
}) => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const modalRef = useRef<ModalHandle>(null);

  const handleOnSave = () => {
    const titleValue = title.current?.value || "";
    const descriptionValue = description.current?.value || "";
    const dueDateValue = dueDate.current?.value || "";

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      modalRef.current?.open();
      return;
    }

    const newProject: Project = {
      id: Math.random(),
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    };

    handleSaveNewProject(newProject);
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-red-500 font-extrabold text-3xl">Invalid Input</h2>
        <p className="text-gray-500">
          Opps... Maybe you forgot to fill something.
        </p>
        <p className="text-gray-500">Please filled all the fields.</p>
      </Modal>
      <div className="flex flex-col w-1/2 h-screen">
        <div className="flex flex-row justify-end space-x-8">
          <button
            onClick={handleCancelNewProject}
            className="border-b-2 hover:border-black border-white"
          >
            Cancel
          </button>
          <button
            onClick={handleOnSave}
            className="text-white bg-black px-6 py-2 hover:text-black hover:bg-gray-300 rounded-md"
          >
            Save
          </button>
        </div>
        <InputField
          type="text"
          ref={title}
          title="title"
          placeHolder="Enter your project title..."
        />
        <InputField
          ref={description}
          title="description"
          isTextArea
          placeHolder="Describe your project..."
        />
        <InputField type="date" ref={dueDate} title="due date" />
      </div>
    </>
  );
};

export default NewProject;
