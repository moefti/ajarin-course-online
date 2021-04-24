import Image from "next/image";
import Star from "../public/star.svg";
import Modul from "../public/modul.svg";

export default function Card(props) {
  return (
    <div className="bg-white max-w-xs h-full shadow-xl p-5 rounded-lg my-5 lg:m-0">
      <Image src={`/${props.image}.png`} width={285} height={197} />
      <button className="p-1 px-2 bg-blue-300 rounded-md flex items-center mt-2 mb-4">
        <div className="w-3 h-3 bg-blue-800 mx-1 rounded-sm"></div>
        {props.tag}
      </button>
      <div className="pb-5 border-b-2">
        <h3 className="text-xl font-medium">{props.title}</h3>
        <h4 className="text-secondary">{props.user}</h4>
      </div>
      <div className="pt-5 pb-2 flex items-center space-x-2 ">
        <Star />
        <span>4.5</span>
        <Modul />
        <span>200 Modul</span>
        <button className="border-2 rounded border-primary p-2">
          Lihat Kelas
        </button>
      </div>
    </div>
  );
}
