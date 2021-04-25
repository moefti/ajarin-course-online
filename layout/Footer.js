import Wrapper from "./Wrapper";
import Logo from "../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <Wrapper addClass="py-4 lg:py-14 grid space-y-8 lg:space-y-0 md:grid-cols-2 lg:grid-cols-5 text-primary">
        <ul className="space-y-2 lg:col-span-2">
          <li>
            <Logo />
          </li>
          <li>
            <p className="text-base text-secondary w-80">
              Ajarin adalah tempat dimana membangun potensi dalam diri anda.
              Platform ini akan mengajarkan mu dengan cara yang interaktif.
            </p>
          </li>
        </ul>
        <ul className="space-y-2 font-light">
          <li className="text-blue-800 font-bold">Bantuan</li>
          <li>Cara kerja</li>
          <li>Cara Beli Kelas</li>
          <li>Cek Kelas</li>
        </ul>
        <ul className="space-y-2 font-light">
          <li className="text-blue-800 font-bold">Tentang Kita</li>
          <li>Kantor</li>
          <li>Mentor</li>
          <li>Kontak</li>
        </ul>
        <ul className="space-y-2 font-light cursor-pointer">
          <li className="text-blue-800 font-bold">Social</li>
          <div className="flex space-x-3">
            <ul className="space-y-2">
              <li className="space-x-5">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="space-x-5">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="space-x-2">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
            <ul className="flex flex-col space-y-2">
              <li>facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </ul>
      </Wrapper>
      <Wrapper addClass="grid grid-cols-1 md:grid-cols-6 py-3 lg:py-10 font-light text-primary">
        <p className="md:col-span-3 lg:col-span-4 text-secondary">
          Copyright © 2021 Ajarin. All rights reserved.
        </p>
        <p className="md:col-span-2 lg:col-span-1 lg:place-self-end">
          Terms & Conditions
        </p>
        <p className="lg:place-self-end">Privacy Policy</p>
      </Wrapper>
    </div>
  );
}
