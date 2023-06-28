import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-4 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlx9LyL-6QVyryY45WX228014MY3uK7ojiw&usqp=CAU
          "
        />
        <a href="/">
          <img
            className="h-5 mx-4"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVy29wwv_3YlQT-l5pe04dj643TVuBTYIPPh7Ggv394a3ejYKEvUfDSVT-gJfUB6MCQ&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-8 px-12">
        <input
          className="w-1/2 border border-gray-500 rounded-l-full p-1"
          type="text"
        />
        <button className="border border-gray-500 rounded-r-full px-3 py-1 bg-slate-100">
          🔍
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvSc84dGZsdIkeorcnKHs1WrW--FR9lBjgw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlx9LyL-6QVyryY45WX228014MY3uK7ojiw&usqp=CAU

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVy29wwv_3YlQT-l5pe04dj643TVuBTYIPPh7Ggv394a3ejYKEvUfDSVT-gJfUB6MCQ&usqp=CAU

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvSc84dGZsdIkeorcnKHs1WrW--FR9lBjgw&usqp=CAU