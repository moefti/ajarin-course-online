import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ImageBanner() {
  const [move, setMove] = useState();
  const wrapper = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);

  useEffect(() => {
    addEventListener();
    return () => {
      removeEventListener();
    };
  });

  const mouseMove = function (e) {
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 60;
    image1.current.style.transform = `translateX(-${x}px) rotate(-${y}deg)`;
    image2.current.style.transform = `translateX(${x * 2}px) rotate(-${
      y * 2
    }deg)`;
    image3.current.style.transform = `translateY(${x}px) rotate(${y}deg)`;
  };

  const addEventListener = () => {
    wrapper.current.addEventListener("mousemove", mouseMove);
  };

  const removeEventListener = () => {
    wrapper.current.removeEventListener("mousemove", mouseMove);
  };

  console.log(wrapper.current);
  return (
    <div
      ref={wrapper}
      className="relative hidden md:block lg:col-span-2 lg:justify-self-end "
    >
      <Image src="/pov.png" width={436} height={488} />
      <div
        ref={image1}
        className="hidden lg:block absolute top-24 -left-24 transform -rotate-6"
      >
        <Image
          src="/Group331.png"
          width={229}
          height={136}
          data-speed="4"
          layout="intrinsic"
        />
      </div>
      <div
        ref={image2}
        className="hidden lg:block absolute top-32  transform -rotate-6 -right-24"
      >
        <Image src="/Group322.png" width={229} height={136} data-speed="4" />
      </div>
      <div
        ref={image3}
        className="hidden lg:block absolute -bottom-16 transform left-28"
      >
        <Image src="/Group333.png" width={229} height={136} data-speed="4" />
      </div>
    </div>
  );
}

export default ImageBanner;
