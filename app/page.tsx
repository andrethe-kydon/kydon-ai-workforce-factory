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
import ProgrammeTimeline from "@/components/ProgrammeTimeline";
import Curriculum from "@/components/Curriculum";
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
        <ProgrammeTimeline />
        <Curriculum />
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
