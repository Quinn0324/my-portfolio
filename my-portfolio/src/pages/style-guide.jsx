import Button from "../components/button-primary";
import Button1 from "../components/button-secondary";
import Phone1 from "../components/phone1.jsx";


export default function Style_Guide() {
  return (
    <div className="pt-2 pl-[130px] pr-[130px] pt-[6.75rem]">

      <h1 className="text-xl font-thin font-heading mb-20 mt-10">Style Guide</h1>
      <div className="mb-6">
        <h2 className="text-lg font-thin font-heading mb-4">Colors</h2>
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-primary flex items-center justify-center text-background font-semibold">Primary</div>
          <div className="w-24 h-24 bg-secondary flex items-center justify-center text-background font-semibold">Secondary</div>
          <div className="w-24 h-24 bg-background flex items-center justify-center text-neutral font-semibold border border-neutral/10">Background</div>
          <div className="w-24 h-24 bg-neutral flex items-center justify-center text-background font-semibold">Neutral</div>
        </div>
      </div>


      <div className="mb-6">
        <h2 className="text-lg font-heading font-thin mb-4 leading-none">Typography</h2>
        <p className="text-base mb-2 leading-none">This is a sample paragraph in the primary font style. It demonstrates the font size, line height, and color used in the portfolio. (text-base)</p>
        <h3 className="text-lg font-heading mb-2 leading-none">This is a Heading 3 (text-lg)</h3>
        <h4 className="text-xl font-thin font-heading mb-2 pt-10 pb-10 leading-none">This is a Heading 4 (text-xl)</h4>
      </div>


      <div className="mb-6">
        <h2 className="text-lg font-thin font-heading mb-4">Buttons</h2>
        <div className="mb-4"><Button /></div>
        <div className="mb-4"><Button1 /></div>
      </div>
      

    <Phone1 />


      
    </div>
  );
}