import { useEffect } from "react";
import theDesigner from "../images/aboutMe/the-designer.webp";
import thePerson from "../images/aboutMe/the-person.webp";

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

<div className="relative pt-[6rem]">

  {/* OVERLAPPING LABEL */}
  <p className="delay-1500 opacity-0 -translate-x-10 transition-all duration-1000 scroll-fade-left absolute left-[4%] top-[33%] uppercase font-[100] text-[#FFFAF0] text-9xl tracking-wide ">
    The Designer
  </p>

   <p className="opacity-0 translate-x-10 transition-all duration-1000 scroll-fade-right absolute right-[4%] bottom-[30%] uppercase font-[100] text-[#FFFAF0] text-9xl tracking-wide ">
    The Person
  </p>

  {/* SECTION 1 */}
  <section className="flex flex-col items-center justify-center px-40 bg-[#080706] min-h-[85vh]">
    <p className="scroll-fade-up opacity-0 translate-y-10 transition-all duration-700 text-[#FFFAF0] text-4xl leading-[1.2em] font-[100] text-center">
      I keep design simple but never boring, minimal layouts with just
      enough personality to stick.
    </p>
  </section>

  {/* SECTION 2 */}
  <section className="flex flex-row items-center justify-center px-40 pt-20 pb-20 min-h-[85vh]">

    <img src={theDesigner} alt="Contact Us" className="h-[600px] w-[600px] object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>

    <div className="pl-10">
      <p className="text-lgg pb-5">Me</p>
      <p className=" text-[#FFFAF0] text-base leading-[1.2em] font-[100]">
        I’ve always been drawn to computers, but it wasn’t until high school when I explored Photoshop, After Effects, and 3D modeling; that I realized how limitless design could feel. I loved the creativity and freedom, and when someone suggested graphic design, it clicked instantly. Studying design at Algonquin College confirmed that creating digital experiences is what I truly enjoy.
      </p>
    </div>
  </section>

  {/* SECTION 3 */} 
  <section className="flex flex-row items-center justify-center px-40 pt-20 min-h-[85vh] bg-[#080706]">
    
    <div className="pr-10">
      <p className="text-lgg pb-5">More Me</p>
      <p className=" text-[#FFFAF0] text-base leading-[1.2em] font-[100]">
        I’m a big bouldering fan, it keeps me problem-solving and pushing limits, which is probably why I love tackling tricky design challenges too.
      </p>
    </div>

    <img src={thePerson} alt="Contact Us" className="h-[600px] w-[600px] object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>

  </section>

</div>
  );
}