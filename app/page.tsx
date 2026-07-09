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
import CourseStructure from "@/components/CourseStructure";
import CourseDetails from "@/components/CourseDetails";
import Partners from "@/components/Partners";
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
        <CourseStructure />
        <ForIndividuals />
        <ForEnterprises />
        <TrustSection />
        <Partners />
        <CourseDetails />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
