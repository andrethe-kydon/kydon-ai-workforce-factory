import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  TrustBar,
  Problem,
  Solution,
  ForIndividuals,
  ForEnterprises,
  TrustSection,
  FAQ,
} from "@/components/Sections";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <ForIndividuals />
        <ForEnterprises />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
