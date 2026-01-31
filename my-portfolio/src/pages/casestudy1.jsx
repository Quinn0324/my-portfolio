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

import { Title } from "react-head";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

import phoneMockup from "../images/Case Study Page/Case Study 1/Screens/screen1.webp";
import phoneMockup2 from "../images/Case Study Page/Case Study 1/Screens/screen2.webp";
import phoneMockup3 from "../images/Case Study Page/Case Study 1/Screens/screen3.webp";
import phoneMockup4 from "../images/Case Study Page/Case Study 1/Screens/screen4.webp";
import phoneMockup5 from "../images/Case Study Page/Case Study 1/Screens/screen5.webp";

export default function Case_study1() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // Check for reduced motion preference and desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener("change", (e) => setPrefersReducedMotion(e.matches));
    
    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  // ------------------------------
  // Carousel slides
  // ------------------------------
  const slides = [
    { image: casestudy1, title: "Analysis and Goals", description: "Gym Leveling turns fitness tracking into a gamified experience by combining RPG-style progression, personalized challenges, and community features. It addresses the lack of engagement in traditional fitness apps by motivating users through XP, levels, and achievements, while centralizing tracking and accountability into one platform designed for long-term consistency." },
    { image: casestudy2, title: "Target Market Research", description: "Gym Leveling targets young adults who are active in fitness and gaming culture, primarily ages 18–35, who seek motivation through gamification, progress tracking, and community-driven challenges. A secondary audience of fitness professionals ages 35–50 is drawn to the app as a tool to improve client accountability and engagement, making it appealing across major urban fitness markets." },
    { image: casestudy3, title: "User Persona 1", description: "Jake is a fitness-focused designer and anime fan who wants a more engaging way to stay motivated. He’s looking for a fitness app that turns workouts into a game-like, leveling experience while still tracking real progress and consistency." },
    { image: casestudy4, title: "User Persona 2", description: "Sarah is an experienced personal trainer who wants a more engaging way to motivate her clients. She’s looking for a gamified fitness app that adds fun, competition, and accountability while supporting long-term client commitment." },
    { image: casestudy5, title: "Moodboarding", description: "Moodboarding establishes the visual direction and emotional tone for Gym Leveling, guiding design decisions around style, color, and atmosphere to ensure the interface feels energetic, game-inspired, and motivating." },
    { image: casestudy6, title: "Sticky Note Ideation – Part 1", description: "This ideation phase maps out the core features, screens, and user flows for Gym Leveling, including quests, achievements, navigation, profiles, leaderboards, and logging workouts, helping define the app’s structure and overall user experience early in the design process." },
    { image: casestudy7, title: "Sticky Note Ideation – Part 2", description: "This stage organizes and categorizes all app screens and features into clear sections, defining navigation structure, screen relationships, and feature groupings to prepare Gym Leveling for wireframing and interaction design." },
    { image: casestudy8, title: "Site Mapping", description: "This site map defines the full navigation flow of Gym Leveling, outlining how users move between screens, features, and sections to ensure a clear, intuitive structure from onboarding through daily quests, progress tracking, and profile management." },
    { image: casestudy9, title: "User Flow", description: "The user flow maps how Gym Leveling users navigate the app, from onboarding to daily quests, progress tracking, and social interactions, ensuring a clear, intuitive path that supports engagement and long-term fitness goals." },
    { image: casestudy10, title: "Low-Fidelity", description: "Low-fidelity designs explore the core layout, structure, and user flow of Gym Leveling, allowing quick iteration on functionality and navigation before refining visual details." },
    { image: casestudy11, title: "Component Building", description: "Component building focuses on creating reusable UI elements for Gym Leveling, ensuring consistency, scalability, and efficient design across all screens." },
    { image: casestudy12, title: "High-Fidelity Designs 1", description: "This phase focuses on translating wireframes into polished screens by applying visual style, color, typography, and core interactions, establishing the overall look and feel of Gym Leveling." },
    { image: casestudy13, title: "High-Fidelity Designs 2", description: "This stage refines interactions, micro-animations, and advanced UI elements, ensuring Gym Leveling’s interface is visually cohesive, engaging, and fully aligned with its gamified, game-inspired user experience." },
    { image: casestudy14, title: "Prototyping", description: "Prototyping creates interactive versions of Gym Leveling, allowing users to test flows, navigation, and features in a realistic context, helping identify issues and validate the overall user experience before development." },
    { image: casestudy15, title: "Final Presentation", description: "The final presentation showcases Gym Leveling’s complete design, from research and ideation to high-fidelity screens and prototypes, highlighting the app’s gamified features, user flows, and engaging, game-inspired experience." },
  ];

  // Enable scroll animations on all devices
  const enableAnimations = !prefersReducedMotion;
  
  // Responsive Y positioning - spread phones better on smaller screens
  const isMobileSmall = typeof window !== "undefined" && window.innerWidth < 640;
  const startY = isMobileSmall ? ["30vh", "35vh", "45vh", "40vh", "55vh"] : ["75vh", "85vh", "95vh", "90vh", "100vh"];
  const endY = isMobileSmall 
    ? [`${-40 * (isDesktop ? 1 : 0.3)}vh`, `${-35 * (isDesktop ? 1 : 0.3)}vh`, `${-30 * (isDesktop ? 1 : 0.3)}vh`, `${-32 * (isDesktop ? 1 : 0.3)}vh`, `${-25 * (isDesktop ? 1 : 0.3)}vh`]
    : ["-145vh", "-135vh", "-125vh", "-130vh", "-120vh"];

  const scrollTarget = sectionRef.current ? { target: sectionRef, offset: ["start start", "end start"] } : undefined;
  const { scrollYProgress } = useScroll(scrollTarget || {});

  // All transforms called unconditionally at top level
  // Simplified for mobile: reduce animation range on smaller screens
  const animationMultiplier = isDesktop ? 1 : 0.3; // 30% of animation on mobile
  
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

  const phoneScale1 = useTransform(scrollYProgress || 0, [0, 0.2, 0.7, 1], [0.75, 0.95, 0.95, 0.6]);
  const phoneScale2 = useTransform(scrollYProgress || 0, [0, 0.2, 0.7, 1], [0.7, 0.9, 0.9, 0.55]);
  const phoneScale3 = useTransform(scrollYProgress || 0, [0, 0.2, 0.7, 1], [0.72, 0.88, 0.88, 0.5]);
  const phoneScale4 = useTransform(scrollYProgress || 0, [0, 0.2, 0.7, 1], [0.75, 0.95, 0.95, 0.6]);
  const phoneScale5 = useTransform(scrollYProgress || 0, [0, 0.2, 0.7, 1], [0.7, 0.85, 0.85, 0.45]);

  // Smooth springs - only apply if animations enabled
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

  const smoothScale1 = useSpring(enableAnimations ? phoneScale1 : 0.7, { stiffness: 45, damping: 22 });
  const smoothScale2 = useSpring(enableAnimations ? phoneScale2 : 0.65, { stiffness: 45, damping: 22 });
  const smoothScale3 = useSpring(enableAnimations ? phoneScale3 : 0.6, { stiffness: 45, damping: 22 });
  const smoothScale4 = useSpring(enableAnimations ? phoneScale4 : 0.65, { stiffness: 45, damping: 22 });
  const smoothScale5 = useSpring(enableAnimations ? phoneScale5 : 0.7, { stiffness: 45, damping: 22 });

  // Opacity and rotate transforms
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

  // Blur - always call unconditionally
  const phoneBlur2 = useTransform(scrollYProgress || 0, [0.25, 0.5, 0.75], ["2px", "0px", "2px"]);
  const phoneBlur3 = useTransform(scrollYProgress || 0, [0.25, 0.5, 0.75], ["3px", "0px", "3px"]);
  const phoneBlur4 = useTransform(scrollYProgress || 0, [0.25, 0.5, 0.75], ["2px", "0px", "2px"]);

  // JSX rendering remains the same
  return (
    <>
      <Title>Gym Leveling Case Study | Preston Quinn</Title>
      {/* Hero Section */}
      <section ref={sectionRef} className="relative md:h-[200vh] h-[150vh] bg-black text-white">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="absolute max-w-3xl text-center z-0">
            <h2 className="text-4xl font-semibold">Gym Leveling</h2>
            <p className="text-white/70 px-4 sm:px-8">
              Deep dive into the Gym Leveling project: A gamified fitness tracking app concept designed with a complete UX/UI process from research to high-fidelity prototypes.
            </p>
          </div>
          {/* Phone images with responsive sizing and positioning */}
          <motion.img
            src={phoneMockup}
            style={{ 
              y: enableAnimations ? smoothY1 : startY[0], 
              x: enableAnimations ? smoothX1 : "0px", 
              scale: enableAnimations ? smoothScale1 : 0.7, 
              opacity: enableAnimations ? phoneOpacity1 : 1, 
              rotate: enableAnimations ? phoneRotate1 : 0 
            }}
            className="w-[90px] sm:w-[100px] md:w-[340px] absolute z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
          <motion.img
            src={phoneMockup2}
            style={{ 
              y: enableAnimations ? smoothY2 : startY[1], 
              x: enableAnimations ? smoothX2 : "-8px", 
              scale: enableAnimations ? smoothScale2 : 0.65, 
              opacity: enableAnimations ? phoneOpacity2 : 0.85, 
              rotate: enableAnimations ? phoneRotate2 : 0,
              filter: enableAnimations ? phoneBlur2 : "0px" 
            }}
            className="w-[90px] sm:w-[100px] md:w-[340px] absolute z-10 drop-shadow-2xl"
          />
          <motion.img
            src={phoneMockup3}
            style={{ 
              y: enableAnimations ? smoothY3 : startY[2], 
              x: enableAnimations ? smoothX3 : "-16px", 
              scale: enableAnimations ? smoothScale3 : 0.6, 
              opacity: enableAnimations ? phoneOpacity3 : 0.7, 
              rotate: enableAnimations ? phoneRotate3 : 0,
              filter: enableAnimations ? phoneBlur3 : "0px" 
            }}
            className="w-[90px] sm:w-[100px] md:w-[340px] absolute z-0 drop-shadow-2xl"
          />
          <motion.img
            src={phoneMockup4}
            style={{ 
              y: enableAnimations ? smoothY4 : startY[3], 
              x: enableAnimations ? smoothX4 : "8px", 
              scale: enableAnimations ? smoothScale4 : 0.65, 
              opacity: enableAnimations ? phoneOpacity4 : 0.85, 
              rotate: enableAnimations ? phoneRotate4 : 0,
              filter: enableAnimations ? phoneBlur4 : "0px" 
            }}
            className="w-[90px] sm:w-[100px] md:w-[340px] absolute z-10 drop-shadow-2xl"
          />
          <motion.img
            src={phoneMockup5}
            style={{ 
              y: enableAnimations ? smoothY5 : startY[4], 
              x: enableAnimations ? smoothX5 : "0px", 
              scale: enableAnimations ? smoothScale5 : 0.7, 
              opacity: enableAnimations ? phoneOpacity5 : 1, 
              rotate: enableAnimations ? phoneRotate5 : 0 
            }}
            className="w-[90px] sm:w-[100px] md:w-[340px] absolute z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
        </div>
      </section>

      {/* Slide Section */}
      <section className="bg-dark text-white px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:pt-20 gap-8 align-center">
        <div className="flex md:flex-row flex-col justify-center gap-8">
          {/* Slide Text */}
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
              <p className="text-white/70">{slides[currentSlide].description}</p>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Images */}
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
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-contain rounded-lg m-shadow-lg" 
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arrow Navigation */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="bg-background text-sm text-primary font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] pr-[1.5625rem] pl-[1.5625rem] rounded-md hover:bg-background border-2 border-primary hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="bg-primary text-sm text-background font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] pr-[1.5625rem] pl-[1.5625rem] rounded-md hover:bg-background border-2 border-primary hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700"
          >
            Next →
          </button>
        </div>
      </section>
    </>
  );
}
