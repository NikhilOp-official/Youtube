import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch= useDispatch()

const toggleMenuHandler=()=>{
  dispatch(toggleMenu())

}

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 p-2">
        <img
        onClick={()=>{toggleMenuHandler()}}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
        />
        <img
          className="h-8 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png"
          alt="logo"
        />
      </div >
      <div className=" col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 rounded-l-full" type="text" />
        <button className="border border-gray-400  rounded-r-full px-3 pl-1 bg-gray-100 " >Search</button>
      </div>

      <div className=" col-span-1">
        <img
        className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&usqp=CAU"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
