"use client";

import React, {useState, useRef} from 'react'
import { motion, useInView } from "framer-motion";

import { Playfair_Display, Istok_Web } from "next/font/google";
const playfair = Playfair_Display({   
    subsets: ['latin'], 
})
const istok = Istok_Web({   
    weight: '400',
    subsets: ['latin'], 
})

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
      initial: { y: 100, opacity: .1 },
      animate: { y: 0, opacity: 1 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSONdata,
  };
  const response = await fetch (endpoint, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200){
    console.log('Message sent.');
    setEmailSubmitted(true);
  };
}
  return (
<section 
    id = 'contact' 
    className="flex flex-col lg:py-16" 
>
    <form className="grid md:grid-cols-2 py-16 md:gap-10 items-center" onSubmit={handleSubmit}>
        <div className=' flex-col lg:pl-20 ml-20 pl-12'>
            <div className="my-8 flex-row flex items-center justify-center">
                <label
                    htmlFor="name"
                    type="string"
                    className={`${istok.className} text-[#333333] mr-4 block text-sm font-bold`}
                >
                    Name
                </label>

                <input
                    name="name"
                    type="string"
                    id="name"
                    required
                    className="bg-[#D9D9D9] border border-[#333333]/50 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block lg:w-[50%] w-full p-2.5"
                    placeholder="Name Here"
                />
            </div>

            <div className="my-8 flex-row flex items-center justify-center">
                <label
                    htmlFor="email"
                    type="email"
                    className={`${istok.className} text-[#333333] mr-4 block text-sm font-bold`}
                >
                    Email
                </label>

                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#D9D9D9] border border-[#333333]/50 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block lg:w-[50%] w-full p-2.5"
                    placeholder="Email@email.com"
                />
            </div>
        </div>
        <div className="pr-12 lg:pl-20 flex-col ">
            

            <div className="my-8 flex-row flex items-center">

                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#D9D9D9] border border-[#333333]/50 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block lg:w-[50%] w-full p-2.5"
                    placeholder="Subject Message"
                />

                <label
                    htmlFor="subject"
                    className={`${istok.className} text-[#333333] ml-4 block text-sm font-bold`}
                >
                    Subject
                </label>
            </div>

            <div className="my-8 flex-row flex items-center flex-grow">

                <textarea
                    name="message"
                    id="message"
                    className="bg-[#D9D9D9] border border-[#333333]/50 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block lg:w-[50%] w-full p-2.5"
                    placeholder="Body Content"
                />

                <label
                    htmlFor="message"
                    className={`${istok.className} text-[#333333] ml-4 block text-sm font-bold`}
                >
                    Message
                </label>
            </div>
        </div>
        <div className='flex col-span-2 items-center justify-center'>
                <button
                type='submit'
                className='bg-[#333333] hover:bg-[#512D2D]  text-cream font-medium py-2.5 px-5 rounded-lg'>
                Send Message
                </button>
            </div>
            {
                emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                    Email Sent Succesfully!
                </p>
                )
            }
    </form>
    <motion.div
        variants={cardVariants}
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3}} 
        className=' mt-4 md:mt-0 flex items-center justify-center '
    >
            <div className="rounded-full bg-[#333333] bg-opacity-0 sm:bg-opacity-80 aspect-square h-[50%] md:h-[100%] flex items-center justify-center  px-0 sm:px-8">
                <h1 className={`${playfair.className} text-[#6A0921] font-extrabold sm:font-regular sm:text-[#FFF5E1] mb-4 text-6xl md:text-5xl lg:text-6xl lg:leading-normal text-center mt-0`}>
                    Contact Us!
                </h1>
            </div>
    </motion.div>    
</section>

  );
};

export default ContactSection;
