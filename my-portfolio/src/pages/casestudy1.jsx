import CaseStudy1 from "../components/casestudy1.jsx";
import { Title, Meta } from "react-head";

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
      <main className="w-full pt-[6.75rem] bg-[#080706] min-h-screen">
        <div className="px-4 sm:px-8 lg:pl-[130px] lg:pr-[130px]">
          <CaseStudy1 />
        </div>
      </main>
    </>
  );
}