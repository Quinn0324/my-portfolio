import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Work1 from "../images/home/my-work-1.webp";
import Work2 from "../images/home/my-work-2.webp";

export default function MyWork() {
  const caseStudies = [
    {
      id: 1,
      title: "Gym Leveling",
      subtitle: "Gamifying Fitness Tracking",
      image: Work1,
      description: "A gamified fitness app concept that transforms workouts into an RPG-style experience. Users track progress, earn XP, and level up their fitness journey.",
      path: "/casestudy1",
      type: "Original App Concept"
    },
    {
      id: 2,
      title: "Canada Computers",
      subtitle: "Canada Computers Redesign",
      image: Work2,
      description: "The existing app felt outdated and inconsistent, making product browsing and navigation frustrating. My goal was to improve usability, align visuals with modern standards, and create a scalable design system.",
      path: "/casestudy2",
      type: "UX/UI Redesign"
    }
  ];

  return (
    <>
      <Title>My Work | Preston Quinn</Title>
      <Meta name="description" content="Explore Preston Quinn's portfolio of UX/UI design projects including case studies, app concepts, and redesigns showcasing design thinking and creative problem-solving." />
      <Meta name="keywords" content="UX/UI projects, design portfolio, case studies, app design, user experience, interface design, Preston Quinn" />
      <Meta name="author" content="Preston Quinn" />
      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="My Work — UX/UI Design Projects" />
      <Meta property="og:description" content="View Preston Quinn's complete portfolio of design projects and case studies." />
      <Meta property="og:image" content="" />
      <Meta property="og:url" content="" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content="My Work — UX/UI Design Projects" />
      <Meta name="twitter:description" content="Explore design projects and case studies by Preston Quinn." />
      <Meta name="twitter:image" content="" />
      
      <div className="px-4 sm:px-8 lg:pl-[130px] lg:pr-[130px] pt-[6.75rem] pb-20">
        <main aria-label="My work portfolio">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#FFFAF0] mb-12 lg:mb-20">My Work</h1>
          
          {/* Case Studies Section */}
          <section aria-label="Case studies" className="mb-20 lg:mb-32">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#FFFAF0] mb-8 lg:mb-12">Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {caseStudies.map((study) => (
                <Link key={study.id} to={study.path} className="group">
                  <div className="flex flex-col h-full overflow-hidden rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_75px_0_rgba(82,195,196,0.3)] transition-shadow duration-300">
                    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={`${study.title} - ${study.subtitle} case study`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6 sm:p-8 bg-[#080706]">
                      <p className="text-xs sm:text-sm text-[#52C3C4] font-semibold uppercase tracking-wide">{study.type}</p>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FFFAF0]">{study.title}</h3>
                      <p className="text-sm text-[#FFFAF0] opacity-80">{study.subtitle}</p>
                      <p className="text-sm text-[#FFFAF0] font-[100] leading-relaxed">{study.description}</p>
                      <div className="mt-auto pt-4">
                        <span className="text-[#52C3C4] font-semibold text-sm">View Case Study →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Coming Soon Section */}
          <section aria-label="Coming soon projects" className="mt-20 lg:mt-32">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#FFFAF0] mb-8 lg:mb-12">Upcoming Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group flex flex-col h-full overflow-hidden rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_75px_0_rgba(82,195,196,0.3)] transition-shadow duration-300">
                  <div className="relative w-full h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1a1915] to-[#0d0b09] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl sm:text-4xl font-light text-[#52C3C4] mb-3">Coming Soon</p>
                      <p className="text-[#FFFAF0] opacity-60 text-sm">Project {item}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-6 sm:p-8 bg-[#080706]">
                    <p className="text-xs sm:text-sm text-[#52C3C4] font-semibold uppercase tracking-wide opacity-60">Placeholder</p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FFFAF0] opacity-60">Project Title</h3>
                    <p className="text-sm text-[#FFFAF0] font-[100] leading-relaxed opacity-60">More details coming soon. Stay tuned for exciting new work!</p>
                    <div className="mt-auto pt-4">
                      <span className="text-[#52C3C4] font-semibold text-sm opacity-60">Coming Soon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}