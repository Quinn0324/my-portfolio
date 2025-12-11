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




export default function StepsThroughout() {
  return (
    <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-25 px-4 sm:px-8 lg:px-40 py-8 sm:py-12 lg:py-16 overflow-auto">
      <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[35px] w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-[30px] w-full">
          <div className="flex flex-col items-start w-full">
            <p className="text-[#FFF] font-outfit text-lg sm:text-3xl lg:text-[47.78px] font-light leading-tight sm:leading-snug lg:leading-[1.2em] w-full">
              Introduction
            </p>
            <p className="text-[#FFF] font-outfit text-sm sm:text-base lg:text-[27.65px] font-normal leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
              A School Project to create a original app concept, so I came up
              with and designed a app to make fitness more engaging through
              RPG-style progression. Gym Leveling transforms workouts into a
              gamified experience, where users track progress, earn XP, and
              level up their fitness journey.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-end items-start lg:items-center gap-4 sm:gap-6 lg:gap-[30px] w-full">
          <div className="flex flex-col justify-start lg:justify-center items-start lg:items-end w-full">
            <p className="text-[#FFF] font-outfit text-lg sm:text-3xl lg:text-[47.78px] font-light leading-tight sm:leading-snug lg:leading-[1.2em] w-full">
              The Challenge
            </p>
            <p className="text-[#FFF] font-outfit text-sm sm:text-base lg:text-[27.65px] font-normal leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
              Most fitness apps only log data, leaving users unmotivated and
              inconsistent. Many rely on multiple platforms for tracking,
              challenges, and community resulting in a fragmented experience.
              The challenge was to design an app that centralizes fitness
              tracking while making it immersive, fun, and motivating.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-25 w-full">
        <p className="text-[#FFF] font-outfit text-lg sm:text-3xl lg:text-[47.78px] font-medium leading-tight sm:leading-snug lg:leading-[1.2em] w-full">
          My Process
        </p>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Defined business, user goals, a problem statement &amp; product analysis
          </p>
          <img
            src={casestudy1}
            className="w-full h-auto max-w-none"
            alt="Defined business goals and product analysis"
          />
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Researched primary &amp; secondary target markets
          </p>
          <img
            src={casestudy2}
            className="w-full h-auto max-w-none"
            alt="Primary and secondary market research"
          />
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Created personas to reflect core user needs
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-2.5 w-full">
            <img
              src={casestudy3}
              className="w-full h-auto max-w-none"
              alt="User persona 1"
            />
            <img
              src={casestudy4}
              className="w-full h-auto max-w-none"
              alt="User persona 2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Developed mind maps, mood boards, and ideation exercises
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-2.5 w-full">
            <img
              src={casestudy5}
              className="w-full h-auto max-w-none"
              alt="Mind map and ideation"
            />
            <img
              src={casestudy6}
              className="w-full h-auto max-w-none"
              alt="Mood board"
            />
          </div>
          <img
            src={casestudy7}
            className="w-full h-auto max-w-none"
            alt="Additional ideation exercises"
          />
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Structured the app with a site map and user flows
          </p>
          <div className="flex flex-col items-start gap-2.5 w-full">
            <img
              src={casestudy8}
              className="w-full h-auto max-w-none"
              alt="Site map"
            />
            <img
              src={casestudy9}
              className="w-full h-auto max-w-none"
              alt="User flows"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Designed sketches, wireframes, and style guide
          </p>
          <img
            src={casestudy10}
            className="w-full h-auto max-w-none"
            alt="Sketches and wireframes"
          />
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Built high-fidelity designs with scalable components in Figma
          </p>
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-[50px] w-full">
            <img
              src={casestudy11}
              className="w-full h-auto max-w-none"
              alt="High-fidelity design 1"
            />
            <img
              src={casestudy12}
              className="w-full h-auto max-w-none"
              alt="High-fidelity design 2"
            />
            <img
              src={casestudy13}
              className="w-full h-auto max-w-none"
              alt="High-fidelity design 3"
            />
            <img
              src={casestudy14}
              className="w-full h-auto max-w-none"
              alt="High-fidelity design 4"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <button className="cursor-pointer text-nowrap flex py-2 sm:py-3 px-4 sm:px-5 justify-center items-center gap-2.5 rounded-lg bg-[#FFFAF0] shadow-[02px20px0rgba(0,0,0,0.25)] w-fit overflow-hidden hover:opacity-90 transition-opacity">
              <p className="text-[#3A342F] font-outfit text-xs sm:text-sm lg:text-[19.2px] font-medium leading-tight sm:leading-normal lg:leading-[1.2em]">
                Prototype Here
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
          <p className="text-[#FFF] font-outfit text-base sm:text-xl lg:text-[39.81px] font-medium leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
            Prototyped the full experience for presentation
          </p>
          <img
            src={casestudy15}
            className="w-full h-auto max-w-none"
            alt="Full prototype presentation"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[35px] w-full">
        <div className="flex flex-col lg:flex-row lg:justify-end items-start lg:items-center gap-4 sm:gap-6 lg:gap-[30px] w-full">
          <div className="flex flex-col justify-start lg:justify-center items-start lg:items-end w-full">
            <p className="text-[#FFF] font-outfit text-lg sm:text-3xl lg:text-[47.78px] font-light leading-tight sm:leading-snug lg:leading-[1.2em] w-full">
              The Solution
            </p>
            <p className="text-[#FFF] font-outfit text-sm sm:text-base lg:text-[27.65px] font-normal leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
              Gym Leveling integrates three core ideas: RPG-inspired progression
              — users earn XP, achievements, and level up. Personalized
              challenges — keeping both beginners and advanced users engaged.
              Community-driven features — leaderboards, group challenges, and
              accountability. The final prototype showcased a cohesive and
              engaging app that bridges fitness with gaming culture.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[35px] w-full">
        <div className="flex flex-col lg:flex-row lg:justify-end items-start lg:items-center gap-4 sm:gap-6 lg:gap-[30px] w-full">
          <div className="flex flex-col justify-start lg:justify-center items-start lg:items-end w-full">
            <p className="text-[#FFF] font-outfit text-lg sm:text-3xl lg:text-[47.78px] font-light leading-tight sm:leading-snug lg:leading-[1.2em] w-full">
              Outcome &amp; Learning
            </p>
            <p className="text-[#FFF] font-outfit text-sm sm:text-base lg:text-[27.65px] font-normal leading-relaxed sm:leading-normal lg:leading-[1.2em] w-full">
              This project strengthened my ability to: Design an app from the
              ground up, not just as a redesign. Build scalable Figma components
              for a complete product system. Apply gamification principles to
              enhance user motivation and engagement.
            </p>
          </div>
        </div>
        <img
          src={casestudy1}
          className="w-full h-auto max-w-none"
          alt="Outcome and learning showcase"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 w-full">
        <button className="cursor-pointer text-nowrap flex py-2 sm:py-3 px-4 sm:px-5 justify-center items-center gap-2.5 rounded-lg bg-[#52C3C4] shadow-[02px20px0rgba(0,0,0,0.25)] w-fit overflow-hidden hover:opacity-90 transition-opacity">
          <p className="text-[#3A342F] font-outfit text-xs sm:text-sm lg:text-[19.2px] font-medium leading-tight sm:leading-normal lg:leading-[1.2em]">
            Want To Work With Me
          </p>
        </button>
      </div>
    </div>
  );
}