import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Title, Meta } from "react-head";
import Middle from "../images/home/&.svg";
import HomeCarousel from "../components/carousel.jsx";
import BackgroundImage from "../images/home/aboutme-bg.webp";
import Logo from "../logo-files/primary.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    window.scrollTo(0, 0);
    navigate("/about");
  };

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
      <Title>Portfolio | Preston Quinn</Title>
      <Meta name="description" content="Preston Quinn is a UX/UI designer based in Ottawa creating minimal, intuitive, and engaging digital experiences for startups and brands." />
      <Meta name="keywords" content="UX design, UI design, web design, digital design, portfolio, Preston Quinn, Ottawa designer" />
      <Meta name="author" content="Preston Quinn" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Preston Quinn — UX/UI Designer | Minimal Intuitive Digital Experiences" />
      <Meta property="og:description" content="Explore Preston Quinn's portfolio of UX/UI design projects focusing on minimal, intuitive, and user-centered digital experiences." />
      <Meta property="og:image" content={Logo} />
      <Meta property="og:url" content="" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Preston Quinn — UX/UI Designer" />
      <Meta name="twitter:description" content="Minimal, intuitive, and engaging digital experiences." />
      <Meta name="twitter:image" content="" />
    
    <div className="relative">
     


      {/* SECTION 1 - HERO */}
      <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-40 bg-[#080706] min-h-[85vh]" aria-label="Hero section">
        <h1 className="text-[#FFFAF0] text-3xl sm:text-4xl lg:text-6xl leading-[1.2em] font-[100] text-center">Designing Minimal, Intuitive, </h1>
        <img src={Middle} alt="Decorative ampersand separator" className="h-[3rem] sm:h-[4rem] lg:h-[5rem] w-auto mt-4 mb-4" role="presentation"/>
        <h2 className="text-[#FFFAF0] text-3xl sm:text-4xl lg:text-6xl leading-[1.2em] font-[100] text-center">Memorable Experiences.</h2>
      </section>

      {/* SECTION 2 - PORTFOLIO SHOWCASE */}
      <section className="relative flex flex-row items-center justify-center pt-20 pb-20 min-h-[60vh]" aria-label="Featured portfolio projects">
        {/* OVERLAPPING LABEL - My Work */}
        <h2 className="opacity-0 -translate-x-10 transition-all delay-[1s] duration-[2s] scroll-fade-left absolute left-[4%] top-[-2%] sm:-top-[3%] lg:-top-[6%] uppercase font-[100] text-[#FFFAF0] text-5xl sm:text-7xl lg:text-9xl tracking-wide">
          My Work
        </h2>
          <HomeCarousel />
      </section>

        <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-40 py-12 sm:py-20 lg:pt-20 gap-6 sm:gap-8 lg:gap-0 min-h-[80vh] lg:min-h-[85vh]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} aria-label="About Preston Quinn preview">
          
          {/* OVERLAPPING LABEL - About Me */}
          <h3 className="opacity-0 translate-x-10 transition-all duration-1000 scroll-fade-right absolute right-[10%] top-[-2%] sm:-top-[3%] lg:-top-[10%] uppercase font-[100] text-[#FFFAF0] text-5xl sm:text-7xl lg:text-9xl tracking-wide">
          About Me
          </h3>
      
          <div className="lg:pr-10">
            <p className="text-lgg pb-5">Me</p>
            <p className="text-[#FFFAF0] text-sm sm:text-base lg:text-base font-[100] leading-snug sm:leading-normal lg:leading-relaxed">
              I’m Preston Quinn, a UX/UI and web designer focused on creating digital experiences that are simple, intuitive, and engaging. I design interfaces that are minimal, accessible, and user-centered while reflecting personality and purpose. My work balances usability with creativity, helping brands and startups connect with their audiences effectively.
            </p>
            <div className="pt-8 ">
                <button onClick={handleNavigateToAbout} className="bg-primary text-sm text-background font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] pr-[1.5625rem] pl-[1.5625rem] rounded-md 
                hover:bg-background border-2 border-primary
                hover:text-primary
                focus:outline-2 
                focus:outline-offset-2 
                focus:outline-primary-500 
                active:bg-primary-700">
                More About Me
                </button>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}