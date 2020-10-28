import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Socials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Next</h1>
        <Card />
      </main>
    </div>
  );
}
