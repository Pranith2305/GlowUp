import Image from "next/image";
import { NavbarDemo } from "./components/layout/navbar";
import { Hero } from "./home/page";
import { Features } from "./components/layout/features";
import Footer from "./components/layout/footer";
export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Features/>
      <Footer/>
    </main>
  );
}
