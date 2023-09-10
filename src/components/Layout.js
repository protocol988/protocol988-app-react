import { useRouter } from "next/router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" ? null : <Navbar />}
      <main className="-mt-24 pb-8">{children}</main>
      {router.pathname === "/" ? null : <Footer />}
    </>
  );
}
