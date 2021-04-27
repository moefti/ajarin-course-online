import Head from "next/head";
import React, {useEffect, useRef, useState} from "react";
import Navbar from "../layout/Navbar";
import Menu from './Menu'
import Footer from "../layout/Footer";

export default function Layout(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", function () {
        if (window.scrollY >= 10) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    };
  }, [setScroll]);

  const handleMenu = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  
  return (
    <div className={`md:overflow-hidden font-Poppins ${openMenu ? 'overflow-y-hidden h-screen' : ''}`}>
      <Head>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <link rel="icon" href="data:;base64,iVBORwOKGO=" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className='pb-8'>
        <Navbar open={handleMenu} bg={scroll} />

      </div>
        <Menu close={handleClose} transition={openMenu} />
      {props.children}
      <Footer/>
    </div>
  );
}
