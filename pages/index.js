import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ImageBanner from "../components/ImageBanner";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-Poppins">
        {/* background */}
        <div className="bg-hero overflow-hidden">
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
        <section className="relative mt-16 sm:mt-10 mx-auto text-center">
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
      </main>
    </Layout>
  );
}
