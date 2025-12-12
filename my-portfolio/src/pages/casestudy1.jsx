import CaseStudy1 from "../components/casestudy1.jsx";
import { Title, Meta } from "react-head";
import CaseStudyHero from "../images/Case Study Page/Case Study 1/caseStudy1.webp";

export default function Case_study1() {
  return (
    <>
      <Title>Gym Leveling Case Study | Preston Quinn</Title>
      <Meta name="description" content="Deep dive into the Gym Leveling project: A gamified fitness tracking app concept designed with a complete UX/UI process from research to high-fidelity prototypes." />
      <Meta name="keywords" content="case study, UX/UI design, app design, Gym Leveling, gamification, fitness app, design process" />
      <Meta name="author" content="Preston Quinn" />
      {/* Open Graph */}
      <Meta property="og:type" content="article" />
      <Meta property="og:title" content="Gym Leveling Case Study — Gamified Fitness App" />
      <Meta property="og:description" content="Explore the complete design process behind Gym Leveling, a gamified fitness tracking app concept." />
      <Meta property="og:image" content="" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Gym Leveling Case Study" />
      <Meta name="twitter:description" content="Complete UX/UI design process for an RPG-style fitness tracking application." />
      
      <div className="relative">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:py-0 min-h-[90vh]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CaseStudyHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} aria-label="Case study hero">
          <h1 className="text-[#FFFAF0] text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-snug lg:leading-relaxed font-[100] text-center">
            Gym Leveling
          </h1>
        </section>

        <main className="w-full pt-0 min-h-screen">
          <div className="w-full px-4 sm:px-8 lg:pl-[130px] lg:pr-[130px] py-12 sm:py-20 lg:py-24">
            <CaseStudy1 />
          </div>
        </main>
      </div>
    </>
  );
}