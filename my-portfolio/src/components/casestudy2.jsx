import casestudy1 from "../images/Case Study Page/Case Study 2/caseStudy-(1).webp";
import casestudy2 from "../images/Case Study Page/Case Study 2/caseStudy-(2).webp"; 
import casestudy3 from "../images/Case Study Page/Case Study 2/caseStudy-(3).webp"; 
import casestudy4 from "../images/Case Study Page/Case Study 2/caseStudy-(4).webp"; 
import casestudy5 from "../images/Case Study Page/Case Study 2/caseStudy-(5).webp"; 
import casestudy6 from "../images/Case Study Page/Case Study 2/caseStudy-(6).webp"; 
import casestudy7 from "../images/Case Study Page/Case Study 2/caseStudy-(7).webp"; 
import casestudy8 from "../images/Case Study Page/Case Study 2/caseStudy-(8).webp"; 
import casestudy9 from "../images/Case Study Page/Case Study 2/caseStudy-(9).webp"; 
import casestudy10 from "../images/Case Study Page/Case Study 2/caseStudy-(10).webp"; 
import casestudy11 from "../images/Case Study Page/Case Study 2/caseStudy-(11).webp"; 
import casestudy12 from "../images/Case Study Page/Case Study 2/caseStudy-(12).webp"; 
import casestudy13 from "../images/Case Study Page/Case Study 2/caseStudy-(13).webp";  
import casestudy14 from "../images/Case Study Page/Case Study 2/caseStudy-(14).webp"; 
import casestudy15 from "../images/Case Study Page/Case Study 2/caseStudy-(15).webp"; 
import casestudy16 from "../images/Case Study Page/Case Study 2/caseStudy-(16).webp"; 
import casestudy17 from "../images/Case Study Page/Case Study 2/caseStudy-(17).webp";
import casestudy18 from "../images/Case Study Page/Case Study 2/caseStudy-(18).webp";
import casestudy19 from "../images/Case Study Page/Case Study 2/caseStudy-(19).webp";
import casestudy20 from "../images/Case Study Page/Case Study 2/caseStudy-(20).webp";
import casestudy21 from "../images/Case Study Page/Case Study 2/caseStudy-(21).webp";
import casestudy22 from "../images/Case Study Page/Case Study 2/caseStudy-(22).webp";
import casestudy23 from "../images/Case Study Page/Case Study 2/caseStudy-(23).webp";
import { Link } from "react-router-dom"; 




export default function CaseStudy2() {
  return (
    <>
      {/* SECTION 1 - INTRODUCTION & CHALLENGE */}
      <section className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-0 py-12 sm:py-20 lg:py-12 gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            Introduction
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            A school project where I chose to redesign the Canada Computers app to modernize its interface, streamline navigation, and bring consistency to the user experience. Type: UX/UI App Redesign. Program: Figma.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            The Challenge
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            The existing app felt outdated and inconsistent, making product browsing and navigation frustrating. My goal was to improve usability, align visuals with modern standards, and create a scalable design system.
          </p>
        </div>
      </section>
      {/* SECTION 2 - MY PROCESS */}
      <section className="flex flex-col items-start px-4 sm:px-8 lg:px-0 py-12 sm:py-20 lg:py-24 gap-12 sm:gap-16 lg:gap-20 w-full">
        <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
          My Process
        </h2>

        {/* PROCESS STEP 1 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Defined goals and problem statement
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <img
              src={casestudy1}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Project goals documentation and analysis"
            />
            <img
              src={casestudy2}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Problem statement and research findings"
            />
            <img
              src={casestudy3}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Project objectives and scope definition"
            />
          </div>
        </div>

        {/* PROCESS STEP 2 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Researched primary &amp; secondary target markets
          </h3>
          <img
            src={casestudy4}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
            alt="Market research and target audience analysis"
          />
        </div>

        {/* PROCESS STEP 3 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Built personas to guide design decisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <img
              src={casestudy6}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="User persona highlighting key demographics and behaviors"
            />
            <img
              src={casestudy5}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Secondary user persona and market insights"
            />
          </div>
        </div>

        {/* PROCESS STEP 4 - IDEATION */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Developed ideation exercises
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <img
              src={casestudy9}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Brainstorming session sketches and conceptual ideas"
            />
            <img
              src={casestudy10}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Ideation workshop outputs and design concepts"
            />
            <img
              src={casestudy7}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Exploration of alternative design solutions"
            />
            <img
              src={casestudy8}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Refined concepts and design direction"
            />
          </div>
        </div>
        {/* PROCESS STEP 5 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Mapped information architecture &amp; user flows
          </h3>
          <div className="flex flex-col gap-4 w-full">
            <img
              src={casestudy11}
              className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Site map showing information architecture and page hierarchy"
            />
            <img
              src={casestudy12}
              className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="User flow diagrams illustrating navigation patterns"
            />
          </div>
        </div>
        {/* PROCESS STEP 6 */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Created sketches, wireframes, and style guide
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h4 className="text-[#FFFAF0] text-xs font-[300] opacity-80">Wireframe Sketches</h4>
              <img
                src={casestudy13}
                className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                alt="Low-fidelity wireframe sketches for key screens"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h4 className="text-[#FFFAF0] text-xs font-[300] opacity-80">Refined Wireframes</h4>
              <img
                src={casestudy14}
                className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                alt="Medium-fidelity wireframes with layout structure"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h4 className="text-[#FFFAF0] text-xs font-[300] opacity-80">Design System &amp; Style Guide</h4>
              <img
                src={casestudy15}
                className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                alt="Design system and style guide documentation"
              />
            </div>
          </div>
        </div>
        {/* PROCESS STEP 7 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Designed high-fidelity screens &amp; prototyped for interactive presentation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <img
              src={casestudy16}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="High-fidelity home screen design with navigation"
            />
            <img
              src={casestudy17}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Product browsing and filtering interface design"
            />
            <img
              src={casestudy18}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Product detail page with enhanced information layout"
            />
            <img
              src={casestudy19}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Shopping cart and checkout flow design"
            />
            <img
              src={casestudy20}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Interactive prototype demonstrating home experience"
            />
            <img
              src={casestudy21}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Interactive prototype showing product search functionality"
            />
            <img
              src={casestudy22}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Interactive prototype for product detail interactions"
            />
            <img
              src={casestudy23}
              className="w-full h-auto rounded-[10px] object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              alt="Interactive prototype demonstrating complete user journey"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-primary text-sm text-background font-sans font-semibold py-3 px-6 rounded-md hover:bg-background hover:border-2 hover:border-primary hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700">
              Prototype Here
            </button>
          </div>
        </div>
      </section>
      {/* SECTION 4 - THE SOLUTION */}
      <section className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-0 py-12 sm:py-20 lg:py-24 gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            The Solution
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            The redesign focused on: Simplified navigation for quicker browsing. Consistent visuals using a unified style guide. Improved product discovery with cleaner layouts and filters.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            Outcome &amp; Learning
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            This project strengthened my UX research process, design system building, and prototyping skills while demonstrating how thoughtful redesign can transform a digital experience.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="flex justify-center items-center">
        <Link to="/contact">
          <button className="bg-primary text-sm text-background font-sans font-semibold py-3 px-6 rounded-md hover:bg-background hover:border-2 hover:border-primary hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700">
            Want To Work With Me
          </button>
        </Link>
      </section>
    </>
  );
}