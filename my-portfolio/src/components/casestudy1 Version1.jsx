import casestudy1 from "../images/Case Study Page/Case Study 1/case-study-(2).webp";
import casestudy2 from "../images/Case Study Page/Case Study 1/case-study-(3).webp"; 
import casestudy3 from "../images/Case Study Page/Case Study 1/case-study-(4).webp"; 
import casestudy4 from "../images/Case Study Page/Case Study 1/case-study-(5).webp"; 
import casestudy5 from "../images/Case Study Page/Case Study 1/case-study-(6).webp"; 
import casestudy6 from "../images/Case Study Page/Case Study 1/case-study-(7).webp"; 
import casestudy7 from "../images/Case Study Page/Case Study 1/case-study-(8).webp"; 
import casestudy8 from "../images/Case Study Page/Case Study 1/case-study-(9).webp"; 
import casestudy9 from "../images/Case Study Page/Case Study 1/case-study-(10).webp"; 
import casestudy10 from "../images/Case Study Page/Case Study 1/case-study-(11).webp"; 
import casestudy11 from "../images/Case Study Page/Case Study 1/case-study-(12).webp"; 
import casestudy12 from "../images/Case Study Page/Case Study 1/case-study-(13).webp"; 
import casestudy13 from "../images/Case Study Page/Case Study 1/case-study-(14).webp";  
import casestudy14 from "../images/Case Study Page/Case Study 1/case-study-(15).webp"; 
import casestudy15 from "../images/Case Study Page/Case Study 1/case-study-(16).webp"; 
import { Link } from "react-router-dom"; 





export default function CaseStudy1() {
  return (
    <>
      {/* SECTION 1 - INTRODUCTION & CHALLENGE */}
      <section className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-0 py-12 sm:py-20 lg:py-12 gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            Introduction
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            A school project to create an original app concept. I designed Gym Leveling, an app that makes fitness more engaging through RPG-style progression. It transforms workouts into a gamified experience where users track progress, earn XP, and level up their fitness journey.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            The Challenge
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            Most fitness apps only log data, leaving users unmotivated and inconsistent. Many rely on multiple platforms for tracking, challenges, and community, resulting in a fragmented experience. The challenge was to design an app that centralizes fitness tracking while making it immersive, fun, and motivating.
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
            Defined business, user goals, a problem statement &amp; product analysis
          </h3>
          <img
            src={casestudy1}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
            alt="Defined business goals and product analysis"
          />
        </div>

        {/* PROCESS STEP 2 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Researched primary &amp; secondary target markets
          </h3>
          <img
            src={casestudy2}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
            alt="Primary and secondary market research"
          />
        </div>

        {/* PROCESS STEP 3 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Created personas to reflect core user needs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <img
              src={casestudy3}
              className="w-full h-auto rounded-[10px]"
              alt="User persona 1"
            />
            <img
              src={casestudy4}
              className="w-full h-auto rounded-[10px]"
              alt="User persona 2"
            />
          </div>
        </div>

        {/* PROCESS STEP 4 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Developed mind maps, mood boards, and ideation exercises
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <img
              src={casestudy5}
              className="w-full h-auto rounded-[10px]"
              alt="Mind map and ideation"
            />
            <img
              src={casestudy6}
              className="w-full h-auto rounded-[10px]"
              alt="Mood board"
            />
          </div>
          <img
            src={casestudy7}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
            alt="Additional ideation exercises"
          />
        </div>

        {/* PROCESS STEP 5 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Structured the app with a site map and user flows
          </h3>
          <div className="flex flex-col gap-3 w-full">
            <img
              src={casestudy8}
              className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
              alt="Site map"
            />
            <img
              src={casestudy9}
              className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
              alt="User flows"
            />
          </div>
        </div>

        {/* PROCESS STEP 6 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Designed sketches, wireframes, and style guide
          </h3>
          <img
            src={casestudy10}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
            alt="Sketches and wireframes"
          />
        </div>

        {/* PROCESS STEP 7 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Built high-fidelity designs with scalable components in Figma
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <img
              src={casestudy11}
              className="w-full h-auto rounded-[10px]"
              alt="High-fidelity design 1"
            />
            <img
              src={casestudy12}
              className="w-full h-auto rounded-[10px]"
              alt="High-fidelity design 2"
            />
            <img
              src={casestudy13}
              className="w-full h-auto rounded-[10px]"
              alt="High-fidelity design 3"
            />
            <img
              src={casestudy14}
              className="w-full h-auto rounded-[10px]"
              alt="High-fidelity design 4"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-primary text-sm text-background font-sans font-semibold py-3 px-6 rounded-md hover:bg-background hover:border-2 hover:border-primary hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700">
              Prototype Here
            </button>
          </div>
        </div>

        {/* PROCESS STEP 8 */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="text-[#FFFAF0] text-base sm:text-lg font-[400]">
            Prototyped the full experience for presentation
          </h3>
          <img
            src={casestudy15}
            className="w-full sm:w-4/5 lg:w-3/5 h-auto rounded-[10px]"
            alt="Full prototype presentation"
          />
        </div>
      </section>
      {/* SECTION 4 - THE SOLUTION */}
      <section className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-0 py-12 sm:py-20 lg:py-24 gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            The Solution
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            Gym Leveling integrates three core ideas: RPG-inspired progression where users earn XP, achievements, and level up. Personalized challenges keeping both beginners and advanced users engaged. Community-driven features including leaderboards, group challenges, and accountability. The final prototype showcased a cohesive and engaging app that bridges fitness with gaming culture.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFFAF0] text-2xl sm:text-3xl lg:text-lgg pb-5 font-[400] leading-tight">
            Outcome &amp; Learning
          </h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
            This project strengthened my ability to: design an app from the ground up, not just as a redesign. Build scalable Figma components for a complete product system. Apply gamification principles to enhance user motivation and engagement.
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