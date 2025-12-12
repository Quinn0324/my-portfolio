import { useState } from "react";
import { Link } from "react-router-dom";
import Work1 from "../images/home/my-work-1.webp";
import Work2 from "../images/home/my-work-2.webp";

const projects = [
  {
    image: Work1,
    title: "Gym Leveling — Gamifying Fitness Tracking",
    description: "A school project to create an original app concept that makes fitness more engaging through RPG-style progression and gamification.",
    type: "Original App Concept",
    caseStudyPath: "/casestudy1",
    imageAlt: "Gym Leveling app interface showing RPG-style fitness progress tracking with level up system"
  },
  {
    image: Work2,
    title: "Canada Computers - Redesigning the User Experience",
    description: "A school project I chose to do a redesign of the Canada Computers app to modernize its interface, streamline navigation, and bring consistency to the user experience.",
    type: "UX/UI Redesign",
    caseStudyPath: "/casestudy2",
    imageAlt: "Canada Computers app redesign showing modernized interface and improved user navigation"
  }
];

export default function ClickCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);


  const handleThumbnailClick = (index) => {
    if (index !== currentIndex) {
      setIsSpinning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsSpinning(false);
      }, 300);
    }
  };

  const current = projects[currentIndex];

  return (
    <div className="w-full flex flex-col items-center gap-5 md:gap-0 justify-center ">
      {/* Main Display */}
      <style>{`
        @keyframes spin {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        .spin-animation {
          animation: spin 0.8s ease-in-out;
          perspective: 1000px;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
        {/* Phone Image with Spin */}
        <div className={`flex-shrink-0 h-[75vh] flex items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[420px] ${isSpinning ? "spin-animation" : ""}`}>
          <img 
            src={current.image} 
            alt={current.imageAlt} 
            className="max-h-[90%] max-w-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="lg:w-2/5 flex flex-col gap-3 sm:gap-4 px-4 sm:px-8 lg:px-0 justify-center pt-4 lg:pt-0">
          <h2 className="text-lg sm:text-lg leading-relaxed sm:leading-loose lg:leading-tight text-[#FFFAF0]">{current.title}</h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base leading-relaxed lg:leading-relaxed font-[100]">
            {current.description}
          </p>
          <p className="text-xs sm:text-sm text-secondary font-semibold">Type: {current.type}</p>
          <Link to={current.caseStudyPath}>
            <button className="bg-secondary text-sm text-background font-sans font-semibold py-3 sm:py-[0.9375rem] px-4 sm:px-[1.5625rem] rounded-md hover:bg-background border-2 border-secondary hover:text-secondary focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 active:bg-primary-700" aria-label={`View ${current.title} case study`}>
              View Case Study
            </button>
          </Link>
        </div>
      </div>

      {/* Preview Thumbnails at Bottom */}
      <div className="flex gap-4 items-center justify-center">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            aria-label={`Preview ${project.title}`}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "border-2 border-primary opacity-100"
                : "border-2 border-transparent opacity-50 hover:opacity-75"
            }`}
          >
            <img 
              src={project.image} 
              alt={project.imageAlt} 
              className="h-40 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>

    </div>
  );
}
