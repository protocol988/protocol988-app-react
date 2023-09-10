import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Protocol988 – Onchain forward contracts</title>
        <html
          className={clsx(
            router.pathname === "/" ? "bg-gray-900" : "bg-white",
            "h-full"
          )}
        />
        <body className="h-full" />
      </Head>
      {router.pathname === "/" ? null : <Navbar />}
      <main className="-mt-24 pb-8">{children}</main>
      {router.pathname === "/" ? null : <Footer />}
    </>
  );
}
