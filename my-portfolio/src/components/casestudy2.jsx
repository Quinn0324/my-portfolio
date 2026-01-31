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
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Title } from "react-head";

import phoneMockup from "../images/Case Study Page/Case Study 2/Screens/screen1.webp";
import phoneMockup2 from "../images/Case Study Page/Case Study 2/Screens/screen2.webp";
import phoneMockup3 from "../images/Case Study Page/Case Study 2/Screens/screen3.webp";
import phoneMockup4 from "../images/Case Study Page/Case Study 2/Screens/screen4.webp";
import phoneMockup5 from "../images/Case Study Page/Case Study 2/Screens/screen5.webp";


export default function CaseStudy2() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (e) => setPrefersReducedMotion(e.matches);

    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener("change", handleMotionPreference);
    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  const enableAnimations = !prefersReducedMotion;
  const isMobileSmall = typeof window !== "undefined" && window.innerWidth < 640;
  const startY = isMobileSmall ? ["30vh", "35vh", "45vh", "40vh", "55vh"] : ["75vh", "85vh", "95vh", "90vh", "100vh"];
  const endY = isMobileSmall 
    ? [`${-40 * (isDesktop ? 1 : 0.3)}vh`, `${-35 * (isDesktop ? 1 : 0.3)}vh`, `${-30 * (isDesktop ? 1 : 0.3)}vh`, `${-32 * (isDesktop ? 1 : 0.3)}vh`, `${-25 * (isDesktop ? 1 : 0.3)}vh`]
    : ["-145vh", "-135vh", "-125vh", "-130vh", "-120vh"];
  const animationMultiplier = isDesktop ? 1 : 0.3;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Phone motion transforms
  const phoneY1 = useTransform(scrollYProgress || 0, [0, 1.2], [startY[0], endY[0]]);
  const phoneY2 = useTransform(scrollYProgress || 0, [0.02, 1.25], [startY[1], endY[1]]);
  const phoneY3 = useTransform(scrollYProgress || 0, [0.04, 1.3], [startY[2], endY[2]]);
  const phoneY4 = useTransform(scrollYProgress || 0, [0.03, 1.28], [startY[3], endY[3]]);
  const phoneY5 = useTransform(scrollYProgress || 0, [0.01, 1.22], [startY[4], endY[4]]);

  const phoneX1 = useTransform(scrollYProgress || 0, [0, 1], isMobileSmall ? [`${50 * animationMultiplier}vw`, `${55 * animationMultiplier}vw`] : ["-5vw", "8vw"]);
  const phoneX2 = useTransform(scrollYProgress || 0, [0, 1], isMobileSmall ? [`${-125 * animationMultiplier}vw`, `${-100 * animationMultiplier}vw`] : ["-25vw", "-12vw"]);
  const phoneX3 = useTransform(scrollYProgress || 0, [0, 1], isMobileSmall ? [`${-15 * animationMultiplier}vw`, `${5 * animationMultiplier}vw`] : ["-45vw", "-28vw"]);
  const phoneX4 = useTransform(scrollYProgress || 0, [0, 1], isMobileSmall ? [`${-70 * animationMultiplier}vw`, `${-60 * animationMultiplier}vw`] : ["20vw", "8vw"]);
  const phoneX5 = useTransform(scrollYProgress || 0, [0, 1], isMobileSmall ? [`${90 * animationMultiplier}vw`, `${80 * animationMultiplier}vw`] : ["40vw", "22vw"]);

  const phoneScale1 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.75, 0.95, 0.95, 0.6]);
  const phoneScale2 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.7, 0.9, 0.9, 0.55]);
  const phoneScale3 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.72, 0.88, 0.88, 0.5]);
  const phoneScale4 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.75, 0.95, 0.95, 0.6]);
  const phoneScale5 = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.7, 0.85, 0.85, 0.45]);

  const phoneOpacity1 = useTransform(scrollYProgress || 0, [0, 0.02, 0.8, 1], isMobileSmall ? [0, 1, 1, 0] : [0.6, 1, 1, 0]);
  const phoneOpacity2 = useTransform(scrollYProgress || 0, [0.02, 0.04, 0.85, 1], isMobileSmall ? [0, 1, 1, 0] : [0.6, 1, 1, 0]);
  const phoneOpacity3 = useTransform(scrollYProgress || 0, [0.04, 0.06, 0.9, 1], isMobileSmall ? [0, 1, 1, 0] : [0.6, 1, 1, 0]);
  const phoneOpacity4 = useTransform(scrollYProgress || 0, [0.03, 0.05, 0.87, 1], isMobileSmall ? [0, 1, 1, 0] : [0.6, 1, 1, 0]);
  const phoneOpacity5 = useTransform(scrollYProgress || 0, [0.01, 0.03, 0.82, 1], isMobileSmall ? [0, 1, 1, 0] : [0.6, 1, 1, 0]);

  const phoneRotate1 = useTransform(scrollYProgress || 0, [0.15, 0.85], isMobileSmall ? [-12, 12] : [-3, 3]);
  const phoneRotate2 = useTransform(scrollYProgress || 0, [0.2, 0.8], isMobileSmall ? [10, -10] : [2, -2]);
  const phoneRotate3 = useTransform(scrollYProgress || 0, [0.25, 0.75], isMobileSmall ? [-8, 8] : [-1, 1]);
  const phoneRotate4 = useTransform(scrollYProgress || 0, [0.18, 0.82], isMobileSmall ? [15, -15] : [3, -3]);
  const phoneRotate5 = useTransform(scrollYProgress || 0, [0.22, 0.78], isMobileSmall ? [-10, 10] : [-2, 2]);

  // Spring smoothing
  const smoothY1 = useSpring(enableAnimations ? phoneY1 : startY[0], { stiffness: 40, damping: 18 });
  const smoothY2 = useSpring(enableAnimations ? phoneY2 : startY[1], { stiffness: 38, damping: 18 });
  const smoothY3 = useSpring(enableAnimations ? phoneY3 : startY[2], { stiffness: 36, damping: 17 });
  const smoothY4 = useSpring(enableAnimations ? phoneY4 : startY[3], { stiffness: 38, damping: 18 });
  const smoothY5 = useSpring(enableAnimations ? phoneY5 : startY[4], { stiffness: 35, damping: 17 });

  const smoothX1 = useSpring(enableAnimations ? phoneX1 : "0px", { stiffness: 40, damping: 20 });
  const smoothX2 = useSpring(enableAnimations ? phoneX2 : "-8px", { stiffness: 38, damping: 20 });
  const smoothX3 = useSpring(enableAnimations ? phoneX3 : "-16px", { stiffness: 36, damping: 20 });
  const smoothX4 = useSpring(enableAnimations ? phoneX4 : "8px", { stiffness: 38, damping: 20 });
  const smoothX5 = useSpring(enableAnimations ? phoneX5 : "0px", { stiffness: 35, damping: 20 });

  const smoothScale1 = useSpring(phoneScale1, { stiffness: 45, damping: 22 });
  const smoothScale2 = useSpring(phoneScale2, { stiffness: 45, damping: 22 });
  const smoothScale3 = useSpring(phoneScale3, { stiffness: 45, damping: 22 });
  const smoothScale4 = useSpring(phoneScale4, { stiffness: 45, damping: 22 });
  const smoothScale5 = useSpring(phoneScale5, { stiffness: 45, damping: 22 });

  // Depth blur
  const phoneBlur2 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], ["2px", "0px", "2px"]);
  const phoneBlur3 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], ["3px", "0px", "3px"]);
  const phoneBlur4 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], ["2px", "0px", "2px"]);

  const slides = [
    {
      image: casestudy1,
      title: "Goals & Creative Brief – Part 1",
      description: "The Canada Computers & Electronics app redesign aims to create a modern, intuitive, and seamless shopping experience. By improving usability, navigation, and visual design, the app helps users find, purchase, and explore electronics effortlessly, boosting engagement and satisfaction while positioning the brand as a trusted, innovative tech retailer."
    },
    {
      image: casestudy2,
      title: "Goals & Creative Brief – Part 2",
      description: "The redesign focuses on a user-friendly, accessible, and high-performing app that aligns with Canada Computers & Electronics’ brand identity. It aims to expand the digital user base, boost downloads and retention, and drive both online and in-store sales through an optimized, seamless shopping experience."
    },
    {
      image: casestudy3,
      title: "Initial Analysis & Problem Statement",
      description: "The Canada Computers & Electronics app struggles with outdated design, poor navigation, limited search functionality, and a cumbersome checkout process. These usability and performance issues frustrate users, reduce engagement, and hinder product discovery. The redesign addresses these gaps to improve efficiency, personalization, and overall user satisfaction, positioning the app as a modern, reliable digital retail platform."
    },
    {
      image: casestudy4,
      title: "Target Market Research",
      description: "The Canada Computers & Electronics app targets tech-savvy adults aged 25–45 who value efficiency, detailed product info, and reliable digital experiences, with a secondary audience of general consumers aged 35–55 seeking straightforward, practical shopping. Both segments prioritize usability, convenience, and trust when exploring and purchasing electronics."
    },
    {
      image: casestudy5,
      title: "User Personas - Primary",
      description: "Developed secondary user personas to ensure design decisions addressed diverse user needs and behaviors."
    },
    {
      image: casestudy6,
      title: "User Personas - Secondary",
      description: "Created primary user personas based on research findings to guide design decisions and feature prioritization."
    },
    {
      image: casestudy7,
      title: "Ideation & Brainstorming",
      description: "Conducted brainstorming sessions to explore design concepts and alternative solutions for key app screens."
    },
    {
      image: casestudy8,
      title: "Design Concepts",
      description: "Refined design concepts and established overall visual direction for the redesign."
    },
    {
      image: casestudy9,
      title: "Ideation Workshop",
      description: "Developed multiple design concepts through collaborative ideation exercises to explore diverse approaches."
    },
    {
      image: casestudy10,
      title: "Concept Exploration",
      description: "Explored various design directions and interaction patterns for improved user experience."
    },
    {
      image: casestudy11,
      title: "Information Architecture",
      description: "Mapped out the app's information structure and page hierarchy to streamline navigation and content organization."
    },
    {
      image: casestudy12,
      title: "User Flow Mapping",
      description: "Created detailed user flow diagrams to illustrate key navigation patterns and task completion flows."
    },
    {
      image: casestudy13,
      title: "Wireframe Sketches",
      description: "Wireframe sketches outline the basic structure and layout of the Canada Computers & Electronics app, focusing on screen hierarchy, navigation, and core interactions to guide functionality before visual design is applied."
    },
    {
      image: casestudy14,
      title: "Refined Wireframes",
      description: "The refined wireframe enhances the app’s layout and navigation, providing a clearer, more organized structure that improves usability and prepares the interface for high-fidelity design."
    },
    {
      image: casestudy15,
      title: "Design System & Style Guide",
      description: "Established a comprehensive design system with typography, colors, components, and guidelines for consistency."
    },
    {
      image: casestudy16,
      title: "Screens Design",
      description: "Designed high-fidelity home screen featuring improved navigation, clear visual hierarchy, and intuitive layout."
    },
    {
      image: casestudy17,
      title: "Presentation of Redesigned Screens",
      description: "Created streamlined product browsing experience with improved filtering, sorting, and search capabilities."
    },
  ];

  return (
    <>
      <Title>Canada Computers Redesign Case Study | Preston Quinn</Title>

      <section ref={sectionRef} className="relative md:h-[200vh] h-[150vh] bg-black text-white">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="absolute max-w-3xl text-center z-0">
            <h2 className="text-4xl font-semibold">Canada Computers Redesign</h2>
            <p className="text-white/70">
              Deep dive into the Canada Computers app redesign project: A comprehensive UX/UI redesign to modernize the interface and improve user experience.
            </p>
          </div>

          <motion.img
            src={phoneMockup}
            style={{ y: enableAnimations ? smoothY1 : startY[0], x: enableAnimations ? smoothX1 : "0px", scale: enableAnimations ? smoothScale1 : 0.7, opacity: enableAnimations ? phoneOpacity1 : 1, rotate: enableAnimations ? phoneRotate1 : 0 }}
            className="w-[60px] sm:w-[100px] md:w-[340px] absolute z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />

          <motion.img
            src={phoneMockup2}
            style={{ y: enableAnimations ? smoothY2 : startY[1], x: enableAnimations ? smoothX2 : "-8px", scale: enableAnimations ? smoothScale2 : 0.65, opacity: enableAnimations ? phoneOpacity2 : 0.85, rotate: enableAnimations ? phoneRotate2 : 0, filter: enableAnimations ? phoneBlur2 : "0px" }}
            className="w-[60px] sm:w-[100px] md:w-[340px] absolute z-10 drop-shadow-2xl"
          />

          <motion.img
            src={phoneMockup3}
            style={{ y: enableAnimations ? smoothY3 : startY[2], x: enableAnimations ? smoothX3 : "-16px", scale: enableAnimations ? smoothScale3 : 0.6, opacity: enableAnimations ? phoneOpacity3 : 0.7, rotate: enableAnimations ? phoneRotate3 : 0, filter: enableAnimations ? phoneBlur3 : "0px" }}
            className="w-[60px] sm:w-[100px] md:w-[340px] absolute z-0 drop-shadow-2xl"
          />

          <motion.img
            src={phoneMockup4}
            style={{ y: enableAnimations ? smoothY4 : startY[3], x: enableAnimations ? smoothX4 : "8px", scale: enableAnimations ? smoothScale4 : 0.65, opacity: enableAnimations ? phoneOpacity4 : 0.85, rotate: enableAnimations ? phoneRotate4 : 0, filter: enableAnimations ? phoneBlur4 : "0px" }}
            className="w-[60px] sm:w-[100px] md:w-[340px] absolute z-10 drop-shadow-2xl"
          />

          <motion.img
            src={phoneMockup5}
            style={{ y: enableAnimations ? smoothY5 : startY[4], x: enableAnimations ? smoothX5 : "0px", scale: enableAnimations ? smoothScale5 : 0.7, opacity: enableAnimations ? phoneOpacity5 : 1, rotate: enableAnimations ? phoneRotate5 : 0 }}
            className="w-[60px] sm:w-[100px] md:w-[340px] absolute z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
        </div>
      </section>

      <section className="bg-dark text-white px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:pt-20 gap-8 align-center">
       
        <div className="flex md:flex-row flex-col justify-center gap-8">
          <div className="w-full md:w-[30vw] flex flex-col gap-6 items-center md:items-start justify-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl text-center md:text-left"
            >
              <h2 className="text-4xl font-semibold">{slides[currentSlide].title}</h2>
              <p className="text-white/70">
                {slides[currentSlide].description}
              </p>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="md:w-[70vw] flex items-center justify-center">
            <div className="w-full max-w-3xl md:h-[500px] h-[250px] flex items-center justify-center">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-contain rounded-lg shadow-lg" />
              </motion.div>
            </div>
          </div>

          

        </div>
          {/* Arrow Navigation */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="bg-background text-sm text-primary font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] pr-[1.5625rem] pl-[1.5625rem] rounded-md 
              hover:bg-background border-2 border-primary
              hover:text-primary
              focus:outline-2 
              focus:outline-offset-2 
              focus:outline-primary-500 
              active:bg-primary-700"
              > 
              ← Previous
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="bg-primary text-sm text-background font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] pr-[1.5625rem] pl-[1.5625rem] rounded-md 
        hover:bg-background border-2 border-primary
        hover:text-primary
        focus:outline-2 
        focus:outline-offset-2 
        focus:outline-primary-500 
        active:bg-primary-700"
            >
              Next →
            </button>
          </div>
      </section>
    </>
  );
}