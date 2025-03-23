const MenuList = ({ item, onclick }) => {
  return (
    <div className="border-2 border-b-gray-500 flex flex-col min-h-[200px] rounded-lg pb-2" >
      <img src={item.imgUrl} alt="" />
      <p className="text-xl font-bold text-center my-4">{item.name}</p>
      <p className="text-center">Thời gian nấu nướng: {item.cookTime}</p>
      <button
        onClick={() => onclick(item)}
        className="w-2/3 mx-auto bg-blue-500 hover:bg-blue-600 text-white text-lg cursor-pointer text-center my-4 py-2 rounded-lg"
      >
        Đặt món
      </button>
    </div>
  );
};

export default MenuList;
