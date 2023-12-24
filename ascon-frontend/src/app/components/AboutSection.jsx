
"use client";
import React, {useRef} from 'react'
import { motion, useInView } from "framer-motion";

import { Junge, Istok_Web ,Playfair_Display } from 'next/font/google'

const junge = Junge({   
    weight: '400',
    subsets: ['latin'], 
})

const istok = Istok_Web({   
    weight: '400',
    subsets: ['latin'], 
})

const playfair = Playfair_Display({   
    subsets: ['latin'], 
})

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { x: 100, opacity: .1 },
        animate: { x: 0, opacity: 1 },
    };

    return (
        <section className='text-white my-24' id = 'about'>
            <div 
                ref={ref}
                className='md:grid md:grid-cols-12 gap-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
            >
                <div className='col-span-8 mt-4 mx-12 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className={`${junge.className} text-3xl font-bold text-[#3A0210] text-center mb-4`}>
                        About Ascon
                    </h2>
                    <p className={`${istok.className}text-lg md:text-xl font-bold text-center text-[#3A0210]`}>
                        Quote About Main Point
                    </p>
                    <p className={`${istok.className}text-base md:text-lg text-center text-[#3A0210]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                
                </div>
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3}}
                    className='col-span-4 mt-4 md:mt-0 flex items-center justify-center '
                >
                    <div className="rounded-full bg-[#333333] bg-opacity-0 sm:bg-opacity-80 aspect-square w-[50%] md:w-[100%] flex items-center justify-center  px-0 sm:px-8">
                    <h1 className={`${playfair.className} text-[#6A0921] font-extrabold sm:font-regular sm:text-[#FFF5E1] mb-4 text-6xl md:text-5xl lg:text-6xl lg:leading-normal text-center`}>
                              Who Are We?
                        </h1>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection