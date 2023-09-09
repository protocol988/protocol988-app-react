import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="-mt-24 pb-8">{children}</main>
      <Footer />
    </>
  );
}
