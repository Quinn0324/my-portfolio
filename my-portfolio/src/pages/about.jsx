import { useEffect } from "react";
import theDesigner from "../images/aboutMe/the-designer.webp";
import thePerson from "../images/aboutMe/the-person.webp";
import { Title, Meta } from "react-head";

export default function About() {
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
      }
    });
  }, { threshold: 0.2 });

  const leftEls = document.querySelectorAll(".scroll-fade-left");
  const rightEls = document.querySelectorAll(".scroll-fade-right");
  const upEls = document.querySelectorAll(".scroll-fade-up");

  leftEls.forEach(el => observer.observe(el));
  rightEls.forEach(el => observer.observe(el));
  upEls.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
      <Title>About Me | Preston Quinn</Title>
      <Meta name="description" content="Learn about Preston Quinn's design journey, philosophy, and personal interests. A UX/UI designer focused on creating intuitive digital experiences." />
      <Meta name="keywords" content="about Preston Quinn, designer bio, UX/UI designer, design philosophy, Ottawa designer" />
      <Meta name="author" content="Preston Quinn" />
      {/* Open Graph */}
      <Meta property="og:type" content="profile" />
      <Meta property="og:title" content="About Preston Quinn — Designer, Problem-Solver, & Adventurer" />
      <Meta property="og:description" content="Discover Preston Quinn's design philosophy, experience, and personal passions." />
      <Meta property="og:image" content="" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content="About Preston Quinn" />
      <Meta name="twitter:description" content="UX/UI designer focused on minimal, intuitive digital experiences." />
      
<div className="relative">

  {/* SECTION 1 - DESIGN PHILOSOPHY */}
  <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:py-0 bg-[#080706] min-h-[90vh] lg:min-h-[90vh] sm:min-h-[90vh]" aria-label="Design philosophy">
    <p className="scroll-fade-up opacity-0 translate-y-0 transition-all duration-[2s] text-[#FFFAF0] text-4xl sm:text-3xl lg:text-4xl leading-snug sm:leading-normal lg:leading-relaxed font-[100] text-center">
      I keep design simple but never boring, minimal layouts with just
      enough personality to stick.
    </p>
  </section>

  {/* SECTION 2 - THE DESIGNER */}
  <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:pt-20 lg:pb-20 gap-6 sm:gap-8 lg:gap-0 min-h-screen lg:min-h-[85vh]" aria-label="The designer - professional background">

    {/* OVERLAPPING LABEL - THE DESIGNER */}
    <h2 className="opacity-0 -translate-x-10 transition-all delay-[1s] duration-[2s] scroll-fade-left absolute left-[4%] top-[-2%] sm:-top-[3%] lg:-top-[10%] uppercase font-[100] text-[#FFFAF0] text-5xl sm:text-7xl lg:text-9xl tracking-wide">
      The Designer
    </h2>

    <img src={theDesigner} alt="Preston Quinn working on design projects - professional portrait" className="w-full sm:w-4/5 lg:w-auto lg:h-[600px] lg:w-[600px] object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>

    <div className="lg:pl-10">
      <p className="text-lgg pb-5">Me</p>
      <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
        I've always been drawn to computers, but it wasn't until high school when I explored Photoshop, After Effects, and 3D modeling; that I realized how limitless design could feel. I loved the creativity and freedom, and when someone suggested graphic design, it clicked instantly. Studying design at Algonquin College confirmed that creating digital experiences is what I truly enjoy.
      </p>
    </div>
  </section>

  {/* SECTION 3 - THE PERSON */} 
  <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:pt-20 gap-6 sm:gap-8 lg:gap-0 min-h-screen lg:min-h-[85vh] bg-[#080706]" aria-label="The person - personal interests and hobbies">
    
    {/* OVERLAPPING LABEL - THE PERSON */}
    <h3 className="opacity-0 translate-x-10 transition-all duration-1000 scroll-fade-right absolute right-[13%] md:right-[10%] top-[-2%] sm:-top-[3%] lg:-top-[10%] uppercase font-[100] text-[#FFFAF0] text-5xl sm:text-7xl lg:text-9xl tracking-wide">
      The Person
    </h3>

    <div className="lg:pr-10 pt-10">
      <p className="text-lgg pb-5">More Me</p>
      <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
        I'm a big bouldering fan, it keeps me problem-solving and pushing limits, which is probably why I love tackling tricky design challenges too.
      </p>
    </div>

    <img src={thePerson} alt="Preston Quinn enjoying outdoor activities - bouldering and adventure sports" className="w-full sm:w-4/5 lg:w-auto lg:h-[600px] lg:w-[600px] object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>

  </section>

</div>
</>
  );
}