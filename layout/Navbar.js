import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../layout/Wrapper";
import LogoSvg from "../public/icons/logo.svg";
import MenuSvg from "../public/icons/Menu.svg";

export default function Navbar(props) {
  return (
    <div className={`fixed z-10 inset-x-0 ${props.bg ? 'bg-white shadow transition ease-in-out' : 'transition duration-500 ease-out'} `}>
    <Wrapper addClass={''} >
    <nav className={`font-semibold text-primary flex justify-between py-5 items-center p-2`}>
      <LogoSvg />
      <div className="md:hidden cursor-pointer" onClick={props.open}>
        <MenuSvg />
      </div>
      <ul className="hidden md:flex self-center cursor-pointer space-x-8">
        <li className="py-2 border rounded border-transparent hover:border-primary px-3 hover:border-opacity-100 cursor-pointer">
          Home
        </li>
        <li className="py-2 border rounded border-transparent hover:border-primary px-3 hover:border-opacity-100 cursor-pointer">
          Kelas
        </li>
        <li className="py-2 border rounded border-transparent hover:border-primary px-3 hover:border-opacity-100 cursor-pointer">
          Beasiswa
        </li>
        <li className="py-2 border rounded border-transparent hover:border-primary px-3 hover:border-opacity-100 cursor-pointer">
          Mentor
        </li>
      </ul>
      <div className=" hidden md:flex space-x-4">
        <button className="px-3 py-2 border border-primary rounded-lg">
          Daftar
        </button>
        <button className="px-3 py-2 bg-primary text-white rounded-lg">
          Masuk
        </button>
      </div>
    </nav>
    </Wrapper>
    </div>
  );
}
