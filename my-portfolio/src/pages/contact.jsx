import Image from "../images/contact/contact.webp";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Title, Meta } from "react-head";

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
    <>
      <Title>Contact | Preston Quinn</Title>
      <Meta name="description" content="Get in touch with Preston Quinn. Interested in collaborating on your next UX/UI design project? Reach out and let's create something amazing." />
      <Meta name="keywords" content="contact Preston Quinn, hire designer, UX/UI design services, design collaboration" />
      <Meta name="author" content="Preston Quinn" />
      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Contact Preston Quinn" />
      <Meta property="og:description" content="Get in touch to discuss your design project and collaboration opportunities." />
      <Meta property="og:image" content="" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content="Contact Preston Quinn" />
      <Meta name="twitter:description" content="Let's create amazing digital experiences together." />
      <div className="w-full min-h-screen flex justify-center px-4 sm:px-8 pt-[6rem] pb-8 sm:pb-[6.75rem] bg-[#080706]">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-[41px] w-full max-w-6xl">

  <form ref={formRef} onSubmit={sendEmail} className="flex flex-col self-center w-full gap-6 sm:gap-[41px] p-6 sm:p-10 pt-5 rounded-[25px] shadow-[0_4px_150px_0_rgba(0,0,0,0.15)]" aria-label="Contact form">
      {/* Title */}
      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="text-[#FFFAF0] font-inter text-2xl sm:text-[30px] font-semibold leading-[1.2em] tracking-[-0.02em]">
          Let's connect
        </h1>
        <p className="text-[#FFFAF0] font-inter text-sm sm:text-md opacity-80 leading-[1.2em] tracking-[-0.01em]">
          Reach out!
        </p>
      </div>

      {/* FORM */}
      <div className="flex flex-col items-start gap-3.5 w-full">

        {/* FIRST + LAST NAME */}
        <div className="flex flex-col sm:flex-row items-start gap-3.5 w-full">
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            aria-label="First name"
            required
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
            aria-label="Last name"
            required
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
          aria-label="Email address"
          required
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
          aria-label="Phone number"
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
          aria-label="Message"
          required
          className="w-full min-h-[200px] sm:min-h-[250px] py-3 px-3.5 rounded-[5px] border border-[rgba(82,195,196,0.25)]
          bg-[rgba(255,250,240,0.05)]
          text-[rgba(255,250,240,0.80)] font-outfit text-[15px]
          placeholder-[rgba(255,250,240,0.60)]
          resize-none outline-none"
        ></textarea>

        {/* BUTTON */}
        <button type="submit" aria-label="Send contact form" className="w-full bg-primary text-sm text-background font-sans font-semibold py-3 sm:py-[0.9375rem] px-4 sm:px-[1.5625rem] rounded-md 
          hover:bg-background 
          hover:border-2 
          hover:border-primary 
          hover:text-primary
          focus:outline-2 focus:outline-offset-2 focus:outline-primary-500 
          active:bg-primary-700">
          Contact Me
        </button>
      </div>
  </form>


  {/* IMAGE */}
  <div className="flex flex-col items-start gap-[41px] w-full">
    <img src={Image} alt="Preston Quinn available for design collaboration and new projects" className="w-full h-auto object-cover rounded-[15px] shadow-[0_4px_50px_0_rgba(0,0,0,0.25)]"/>
  </div>
        </div>
      </div>
    </>
  );
}