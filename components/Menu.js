import React from "react";
import CloseSvg from "../public/icons/Close.svg";

export default function Menu(props) {
  return (
    <div>
      <div
        className={`h-full fixed top-0 transform right-0 ${
          props.transition ? "translate-x-0" : "translate-x-full"
        } full  w-72 flex justify-center items-center z-50 shadow-2xl bg-white transition-all duration-300`}
      >
        <div
          className="absolute top-9 right-8 cursor-pointer"
          onClick={props.close}
        >
          <CloseSvg />
        </div>
        <ul className="cursor-pointer text-darkPurple-dark text-center space-y-24">
          <li className="py-2 border rounded border-transparent hover:border-gray-600 px-3 hover:border-opacity-100 cursor-pointer">
            Home
          </li>
          <li className="py-2 border rounded border-transparent hover:border-gray-600 px-3 hover:border-opacity-100 cursor-pointer">
            Kelas
          </li>
          <li className="py-2 border rounded border-transparent hover:border-gray-600 px-3 hover:border-opacity-100 cursor-pointer">
            Beasiswa
          </li>
          <li className="py-2 border rounded border-transparent hover:border-gray-600 px-3 hover:border-opacity-100 cursor-pointer">
            Mentor
          </li>
        </ul>
      </div>
      <div
        className={`transition duration-300 fixed backdrop bg-black w-full h-full top-0 left-0 opacity-20 z-40 ${
          props.transition ? "" : "hidden"
        }`}
        onClick={props.close}
      ></div>
    </div>
  );
}
