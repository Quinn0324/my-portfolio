import { useState } from "react";
import { Link } from "react-router-dom";
import Work1 from "../images/home/my-work-1.webp";
import Work2 from "../images/home/my-work-2.webp";

const projects = [
  {
    image: Work1,
    title: "Gym Leveling — Gamifying Fitness Tracking",
    description: "A School Project to create a original app concept, so I came up with and designed a app to make fitness more engaging through RPG-style progression. Gym Leveling transforms workouts into a gamified experience, where users track progress, earn XP, and level up their fitness journey.",
    type: "Original App Concept",
    caseStudyPath: "/casestudy1",
    imageAlt: "Gym Leveling app interface showing RPG-style fitness progress tracking with level up system"
  },
  {
    image: Work2,
    title: "Canada Computers — UX/UI Redesign",
    description: "A school project I chose to do a redesign of the Canada Computers app to modernize its interface, streamline navigation, and bring consistency to the user experience.",
    type: "UX/UI Redesign",
    caseStudyPath: "/casestudy2",
    imageAlt: "Canada Computers app redesign showing modernized interface and improved user navigation"
  }
];

export default function ClickCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePrevious = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
      setIsSpinning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
      setIsSpinning(false);
    }, 300);
  };

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
    <div className="w-full flex flex-col items-center justify-center gap-8 py-6 ">
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
          <h2 className="text-lg sm:text-lgg leading-relaxed sm:leading-loose text-[#FFFAF0]">{current.title}</h2>
          <p className="text-[#FFFAF0] text-sm sm:text-base leading-relaxed font-[100]">
            {current.description}
          </p>
          <p className="text-xs sm:text-sm text-secondary font-semibold">Type: {current.type}</p>
          <Link to={current.caseStudyPath}>
            <button className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-background font-semibold rounded-md hover:bg-primary/80 transition w-fit text-sm sm:text-base" aria-label={`View ${current.title} case study`}>
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
