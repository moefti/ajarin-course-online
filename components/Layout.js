import Head from "next/head";
import React from "react";

export default function Layout(props) {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div>{props.children}</div>
    </div>
  );
}
