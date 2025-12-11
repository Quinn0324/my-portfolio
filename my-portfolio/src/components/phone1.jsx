import Work1 from "../images/home/my-work-1.webp";

export default function Phone1() {
  return (


    <div className="relative w-full h-full flex items-center justify-center">

      <img src={Work1} alt="Phone Mockup 1" className="max-h-full max-w-full rounded-lg shadow-lg object-contain"/>
      
      <div className="pl-10">
        <p className="text-lgg leading-10 pb-5">Gym Leveling — Gamifying Fitness Tracking</p>
        <p className=" text-[#FFFAF0] text-base leading-[1.2em] font-[100]">
          A School Project to create a original app concept, so I came up with and designed a app to make fitness more engaging through RPG-style progression. Gym Leveling transforms workouts into a gamified experience, where users track progress, earn XP, and level up their fitness journey.
        </p>
    </div>
    
    </div>
  );
}
