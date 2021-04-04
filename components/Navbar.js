import React from "react";
import Image from "next/image";

export default function Navbar(props) {
  return (
    <nav className="font-semibold text-primary flex justify-between py-7 z-10 relative">
      <Image src="/logo.svg" height={32} width={76} />
      <div className="md:hidden cursor-pointer" onClick={props.open}>
        <Image src="/Menu.svg" height={24} width={24} />
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
  );
}
