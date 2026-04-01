import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Hours />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </>
  );
}
