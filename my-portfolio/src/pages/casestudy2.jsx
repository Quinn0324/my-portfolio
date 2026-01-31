import CaseStudy2 from "../components/casestudy2.jsx";
import { Title, Meta } from "react-head";
import CaseStudyHero from "../images/Case Study Page/Case Study 2/caseStudy2.webp";

export default function Case_study2() {
  return (
    <>
      <Title>Canada Computers Redesign Case Study | Preston Quinn</Title>
      <Meta name="description" content="Deep dive into the Canada Computers redesign project: Complete UX/UI design process from research to high-fidelity prototypes for a major e-commerce platform." />
      <Meta name="keywords" content="case study, UX/UI design, e-commerce, Canada Computers, redesign, web app design, design process" />
      <Meta name="author" content="Preston Quinn" />
      {/* Open Graph */}
      <Meta property="og:type" content="article" />
      <Meta property="og:title" content="Canada Computers Redesign Case Study — E-Commerce Platform" />
      <Meta property="og:description" content="Explore the complete design process behind Canada Computers redesign, transforming the e-commerce experience." />
      <Meta property="og:image" content={CaseStudyHero} />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Canada Computers Redesign Case Study" />
      <Meta name="twitter:description" content="Complete UX/UI design process for Canada Computers e-commerce platform." />
      
      <div className="relative">
        <main className="w-full pt-0 min-h-screen">
          <div className="w-full">
            <CaseStudy2 />
          </div>
        </main>
      </div>
    </>
  );
}