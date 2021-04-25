import { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Fragment>
      <Slider {...settings}>
        <div>
          <h3 className="font-medium">
            Kelas yang sangat bermanfaat, mudah di pahami dan yang paling
            penting biayanya sangat hemat di kantong.
          </h3>
          <p className="font-bold mb-5">- Ali AK</p>
          <Image src="/user-testi.png" width={50} height={50} />
        </div>
        <div>
          <h3 className="font-medium">
            Kelas yang sangat bermanfaat, mudah di pahami dan yang paling
            penting biayanya sangat hemat di kantong.
          </h3>
          <p className="font-bold mb-5">- Era AK</p>
          <Image src="/user-testi.png" width={50} height={50} />
        </div>
      </Slider>
    </Fragment>
  );
}
