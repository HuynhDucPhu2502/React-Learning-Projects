import { useState } from "react";
import Card from "./components/Card";
import DUMMY_DATA from "./DUMMY_DATA";

function App() {
  const [data, setData] = useState(DUMMY_DATA);

  const handleDelete = (index) => {
    setData((data) => data.filter((item, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setData([]);
  };

  return (
    <>
      <div className="grid grid-cols-4">
        {data.map((item, index) => (
          <Card
            firstName={item.firstName}
            lastName={item.lastName}
            phoneNumber={item.phoneNumber}
            address={item.address}
            onClickDeleteBtn={() => handleDelete(index)}
            key={index}
          ></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleDeleteAll}
          className="text-5xl bg-red-500 hover:bg-red-700 rounded-lg text-white px-24  py-2 my-12"
        >
          DELETE
        </button>
      </div>
    </>
  );
}

export default App;
