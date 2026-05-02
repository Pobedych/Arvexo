import { Cta } from "@/components/Cta";
import { Directions } from "@/components/Directions";
import { FamilyEcosystem } from "@/components/FamilyEcosystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Shop } from "@/components/Shop";
import { VisionCards } from "@/components/VisionCards";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directions />
        <Process />
        <Shop />
        <FamilyEcosystem />
        <VisionCards />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
