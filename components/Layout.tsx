import Head from "next/head";
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-full">
      <Head>
        <title>Socials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 mb-4">
        <Nav />
      </header>

      <main>
        <div className="container mx-auto">{children}</div>
      </main>

      <footer className="mt-auto">Footer placeholder</footer>
    </div>
  );
};

export default Layout;
