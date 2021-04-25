import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import ImageBanner from "../components/ImageBanner";
import Wrapper from "../layout/Wrapper";
import ArrowSvg from "../public/icons/arrow.svg";
import Card from "../components/Card";
import CarouselComp from "../components/CarouselComp";
import Footer from "../layout/Footer";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Layout>
      <Head>
        <title>Ajarin - Course Online</title>
      </Head>
      <main className={`font-Poppins`}>
        <Wrapper addClass="">
          <div className="bg-hero w-full ">
            <Image src="/bg-hero.png" layout="fill" />
          </div>
          {/* navbar menu mobile */}
          <Navbar open={handleMenu} />
          <Menu close={handleClose} transition={openMenu} />
          {/* section hero */}
          <section className="relative my-12 md:grid md:gap-36 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 grid-flow-row">
            <div className="flex flex-col justify-center content-center">
              <h1 className="text-4xl font-Lato capitalize text-primary font-bold">
                Belajar Online kini lebih Mudah
              </h1>
              <p className="text-secondary mt-3">
                Ajarin adalah tempat dimana membangun potensi dalam diri anda.
                Platform ini akan mengajarkan mu dengan cara yang interaktif.
              </p>
              <form className="form-search space-x-5 mt-8">
                <input
                  type="text"
                  className="rounded-lg w-1/2 bg-secondary-light border-none text-primary active: focus:border-primary focus:ring-2 px-4 py-2 outline-none text-lg"
                  placeholder="Tulis kelas disini"
                />
                <button className="font-bold font-Montserrat text-lg bg-third py-2 px-4 border-none rounded-lg text-third-dark">
                  Cari Kelas
                </button>
              </form>
            </div>
            <ImageBanner />
          </section>
          {/* section partnership */}
          <section className="relative mt-16 sm:mt-10 mx-auto text-center lg:mt-32">
            <h3 className="capitalize mb-6 text-sm sm:text-base lg:text-lg text-secondary">
              dipercaya oleh 100+ perusahaan di seluruh dunia
            </h3>
            <div className="hidden sm:block">
              <Image src="/partnership.png" width={1065} height={42} />
            </div>
            <div className="sm:hidden">
              <Image src="/partnership-sm.png" width={388} height={94} />
            </div>
          </section>
          {/* section benefit */}
          <section className="mt-44 text-primary mb-20 lg:mb-64">
            <h2 className="text-2xl lg:text-4xl text-center font-bold font-Lato">
              Cari Tau Kenapa Kamu Harus Ambil Kelas Disini
            </h2>
            <div className="my-10 lg:mt-16 lg:grid lg:grid-cols-2 space-x-8">
              <div className="sm:w-9/12 lg:w-full sm:mx-auto">
                <Image
                  src="/benefit.png"
                  width="578"
                  height="422"
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col items-center mt-10 lg:mt-6">
                <p className="text-primary-dark">
                  Kita menawarkan kelas online dengan harapan kalian bisa
                  belajar dengan cepat dan mudah untuk meningkatkan kemampuan.
                  Dengan :
                </p>
                <ul className="list-outside mt-4 list-none ">
                  {/* item 1 */}
                  <li className="flex space-x-4 font-medium">
                    {/* <img src="/arrow.svg" alt="arrow" /> */}
                    <div>
                      <ArrowSvg />
                    </div>
                    <span>50+ Kelas unggulan dengan Mentor Berpengalaman</span>
                  </li>
                  <p className="ml-10 font-light text-sm text-primary-dark">
                    Pilih kelasmu dengan tujuan kamu meningkatan kemampuan
                    bersama mentor berpengalaman di bidangnya.
                  </p>
                  {/* item 2 */}
                  <li className="flex space-x-4 font-medium mt-8">
                    <div>
                      <ArrowSvg />
                    </div>
                    <span>Belajar Dimana Saja dan Kapan Saja</span>
                  </li>
                  <p className="ml-10 font-light text-sm text-primary-dark">
                    Kamu bisa belajar dimana dan kapan saja setelah kamu membeli
                    kelas dengan mengunduh video kelas.
                  </p>
                  {/* item 3 */}
                  <li className="flex space-x-4 font-medium mt-8">
                    <div>
                      <ArrowSvg />
                    </div>
                    <span>20+ Mentor dan Asistennya Siap Membantu kamu</span>
                  </li>
                  <p className="ml-10 font-light text-sm text-primary-dark">
                    Ketika kamu bingung dan belum mengerti apa yang di ajarkan,
                    kamu bisa bertanya kepada mentor dan asistennya.
                  </p>
                </ul>
              </div>
            </div>
          </section>
          {/* section Kelas */}
        </Wrapper>
        <section className="pt-16 pb-32 bg-third-light text-primary">
          <Wrapper>
            <h2 className="text-2xl lg:text-4xl font-bold font-Lato mb-10 lg:mb-20">
              Kelas Populer
            </h2>
            <div className="flex flex-col items-center justify-between md:flex-row flex-wrap">
              <Card
                image="programming"
                tag="Pemograman"
                title="Belajar pemogramam PHP dasar"
                user="Mang Dadang"
              />
              <Card
                image="matematika"
                tag="Matematika"
                title="Belajar pemogramam PHP dasar"
                user="Mang Dadang"
              />
              <Card
                image="bahasa"
                tag="Bahasa"
                title="Belajar pemogramam PHP dasar"
                user="Mang Dadang"
              />
            </div>
          </Wrapper>
        </section>
        {/* section testimoni */}
        <section className="pt-32 pb-20 lg:pb-64 text-primary relative">
          <Wrapper>
            <div className="absolute">
              <Image src="/testi-bg.png" width={1125} height={636} />
            </div>
            <div className="relative w-full h-full z-20">
              <div className=" top-20">
                <h1 className="text-4xl font-Lato font-bold  mb-20 md:md-40">
                  Mari Lihat apa yang dikatakan
                  <br /> siswa kami
                </h1>
                <div className="px-16 py-24 bg-green-50 w-full rounded-md text-center text-xl space-y-8 font-lato max-w-3xl">
                  <CarouselComp />
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        {/* section ads */}
        <section className="bg-green-100 py-12 ">
          <Wrapper addClass="flex flex-col md:flex-row justify-between text-center md:text-left space-y-10 md:space-y-0 items-center">
            <h2 className="text-2xl md:text-3xl font-Lato font-bold">
              Mari Bergabung bersama kami <br />
              untuk meningkatkan Kemampuanmu
            </h2>
            <button className="bg-black text-white py-2 px-3 md:py-3 md:px-4 rounded-md">
              Bergabung Sekarang
            </button>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
