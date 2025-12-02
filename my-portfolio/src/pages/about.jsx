export default function About() {
  return (

<div className="relative pt-[6rem]">

  {/* OVERLAPPING LABEL */}
  <p className="absolute left-[4%] top-[34%] uppercase font-[100] text-[#FFFAF0] text-9xl tracking-wide ">
    The Designer
  </p>

   <p className="absolute left-[40%] bottom-[28%] uppercase font-[100] text-[#FFFAF0] text-9xl tracking-wide ">
    The Person
  </p>

  {/* SECTION 1 */}
  <section className="flex flex-col items-center justify-center px-40 bg-[#080706] min-h-[85vh]">
    <p className="text-[#FFFAF0] text-lg leading-[1.2em] font-[100] text-center">
      I keep design simple but never boring, minimal layouts with just
      enough personality to stick.
    </p>
  </section>

  {/* SECTION 2 */}
  <section className="flex flex-col items-center justify-center 
                      px-40 py-[250px] min-h-[85vh]">
    <p className="text-[#FFFAF0] text-lg leading-[1.2em] font-[100] text-center">
      This is where your About section content will go.
    </p>
  </section>

  {/* SECTION 3 */} 
  <section className="flex flex-col items-center justify-center 
                      px-40 py-[250px] min-h-[85vh] bg-[#080706]">
    <p className="text-[#FFFAF0] text-lg leading-[1.2em] font-[100] text-center">
      This is where your About section content will go.
    </p>
  </section>

</div>
  );
}