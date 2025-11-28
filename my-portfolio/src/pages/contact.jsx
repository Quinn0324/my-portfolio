import Image from "../images/contact.webp";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function Contact() {
const formRef = useRef();

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_dkdw2ur",
    "template_km8cgdg",
    formRef.current,
    "NC01AAopAs8BK2m_r"
  )
  .then(() => {
    alert("Your email sent successfully! I will get back to you soon.");
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send email. Please try again.");
  });
}

  return (
<div className="w-full h-full flex justify-center pl-[130px] pr-[130px] pt-[10rem] pb-[6.75rem] bg-[#080706]">
<div className="flex flex-row gap-[41px]">

  <form ref={formRef} onSubmit={sendEmail} className="flex flex-col self-center w-full gap-[41px] p-10 pt-5 rounded-[25px] shadow-[0_4px_150px_0_rgba(0,0,0,0.15)]">
      {/* Title */}
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-[#FFFAF0] font-inter text-[30px] font-semibold leading-[1.2em] tracking-[-0.02em]">
          Let’s connect
        </p>
        <p className="text-[#FFFAF0] font-inter text-md opacity-80 leading-[1.2em] tracking-[-0.01em]">
          Reach out!
        </p>
      </div>

      {/* FORM */}
      <div className="flex flex-col items-start gap-3.5 w-full h-[350px]">

        {/* FIRST + LAST NAME */}
        <div className="flex items-start gap-3.5 w-full">
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            className="w-full py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
            bg-[rgba(255,250,240,0.05)]
            text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
            placeholder-[rgba(255,250,240,0.60)]
            outline-none"
          />

          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            className="w-full py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
            bg-[rgba(255,250,240,0.05)]
            text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
            placeholder-[rgba(255,250,240,0.60)]
            outline-none"
          />
        </div>

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
          bg-[rgba(255,250,240,0.05)]
          text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
          placeholder-[rgba(255,250,240,0.60)]
          outline-none"
        />

        {/* PHONE */}
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
          bg-[rgba(255,250,240,0.05)]
          text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
          placeholder-[rgba(255,250,240,0.60)]
          outline-none"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Message"
          className="w-full h-full py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
          bg-[rgba(255,250,240,0.05)]
          text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
          placeholder-[rgba(255,250,240,0.60)]
          resize-none outline-none"
        ></textarea>

        {/* BUTTON */}
        <button type="submit" className=" min-w-screen w-full bg-primary text-sm text-background font-sans font-semibold pt-[0.9375rem] pb-[0.9375rem] px-[1.5625rem] rounded-md 
          hover:bg-background border-2 border-primary hover:text-primary
          focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 
          active:bg-primary-700">
          Contact Me
        </button>
      </div>
  </form>


  {/* IMAGE */}
    <div className=" flex flex-col items-start gap-[41px]">
    <img src={Image} alt="Contact Us" className="h-full object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>

  </div>
</div>

</div>
  );    
}