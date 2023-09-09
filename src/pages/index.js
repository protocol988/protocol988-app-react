import Head from "next/head";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <html className="h-full bg-white" />
        <body className="h-full" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
