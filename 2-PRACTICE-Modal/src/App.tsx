import { useState } from "react";
import DummyContent from "./components/DummyContent";
import Modal from "./components/Modal";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="my-12 w-fit mx-auto">
        <button
          className="bg-red-600  text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          onClick={openModal}
        >
          Click Me
        </button>
      </div>
      <DummyContent />
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default App;
