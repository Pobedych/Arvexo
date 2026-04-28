import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Directions } from "@/components/Directions";
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
        <About />
        <Directions />
        <Shop />
        <Projects />
        <WhyArvexo />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
