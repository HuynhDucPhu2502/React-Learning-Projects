const Card = ({
  firstName,
  lastName,
  phoneNumber,
  address,
  onClickDeleteBtn,
}) => {
  return (
    <div className="space-y-4 border-2 border-gray-300 py-2 w-[320px] rounded-lg mx-auto my-12">
      <div className="border-b-2 border-gray-300 px-4 py-1">
        <p className="text-xl font-bold">{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className="border-b-2 border-gray-300 px-4 py-1">
        <p>
          Phone: <span className="font-bold">{phoneNumber}</span>
        </p>
      </div>
      <div className="border-b-2 border-gray-300 px-4 py-1">
        <p>
          Address: <span className="font-bold">{address}</span>
        </p>
      </div>
      <div className="flex justify-end px-4 py-2">
        <button
          onClick={onClickDeleteBtn}
          className="bg-red-500 hover:bg-red-700 rounded-lg text-white px-4 py-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
