import Head from "next/head";
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Socials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0">
        <Nav />
      </header>

      <main>
        <div className="container p-6 mx-auto">{children}</div>
      </main>

      <footer className="mt-auto">Footer placeholder</footer>
    </div>
  );
};

export default Layout;
