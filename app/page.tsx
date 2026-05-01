import { Cta } from "@/components/Cta";
import { Directions } from "@/components/Directions";
import { FamilyEcosystem } from "@/components/FamilyEcosystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Shop } from "@/components/Shop";
import { WhyArvexo } from "@/components/WhyArvexo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directions />
        <Shop />
        <FamilyEcosystem />
        <Projects />
        <WhyArvexo />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
