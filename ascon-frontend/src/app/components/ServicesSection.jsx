
"use client";
import React, {useTransition, useState, useRef} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { Playfair_Display, Junge } from 'next/font/google'
import { LabScienceIcon, HealthIcon, EducationIcon, FinancesIcon } from '../../../public/svgs'; 
import { motion, useInView } from "framer-motion";

const playfair = Playfair_Display({   
    subsets: ['latin'], 
})

const junge = Junge({   
    weight: '400',
    subsets: ['latin'], 
})

const TAB_DATA = [
    {
        title: "Lab Science",
        id: "labscience",
        content: (
            <p> Science Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        )
    },
    {
        title: "Health",
        id: "health",
        content: (
            <p> Health Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <p> Education Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        )
    },
    {
        title: "Finances",
        id: "finances",
        content: (
            <p> Finances Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        )
    },
    

]

const ServicesSection = () => {
    const [tab, setTab] = useState("labscience");
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { x: -100, opacity: .1 },
        animate: { x: 0, opacity: 1 },
    };

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    
    return (
        <section className='text-black my-24' id = 'services'>
            <div className='md:grid md:grid-cols-12 gap-x-7 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3 }}
                    className='md:col-span-4 mt-4 md:mt-0 flex items-center justify-center '
                >
                    <div className="rounded-full bg-[#333333] bg-opacity-0 sm:bg-opacity-80 aspect-square w-[50%] md:w-[100%] flex items-center justify-center  px-0 sm:px-8">
                        <h1 className={`${playfair.className} text-[#6A0921] font-extrabold sm:font-regular sm:text-[#FFF5E1] mb-4 text-6xl md:text-5xl lg:text-6xl lg:leading-normal text-center`}>
                              Services
                        </h1>
                    </div>
                </motion.div>
                <div className='md:col-span-5 mt-4 px-8 md:mt-0 text-left flex flex-col justify-center h-full'>
                    <div className='mt-8'>
                        <h2 className={`${junge.className} text-3xl font-bold text-[#3A0210] text-center mb-4`}>
                            {TAB_DATA.find((t) => t.id === tab).title}
                        </h2>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
                <div className='md:col-span-3 mt-4 md:mt-0 flex justify-center h-[100%] '>
                    <div className="bg-[#6B4B53] sm:bg-opacity-80 gap-8 h-full  flex flex-col items-center justify-center py-10 px-0 sm:px-10" style={{ borderRadius: '20px' }}>
                        <TabButton 
                            selectTab={() => handleTabChange("labscience")} 
                            active={tab === "labscience"}
                            iconWidth={70}
                            iconHeight={70}
                        >
                            <LabScienceIcon />
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("health")} 
                            active={tab === "health"}
                            iconWidth={70}
                            iconHeight={70}
                        >
                            <HealthIcon />
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                            iconWidth={70}
                            iconHeight={70}
                        >
                            <EducationIcon />
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("finances")} 
                            active={tab === "finances"}
                            iconWidth={70}
                            iconHeight={70}
                        >
                            <FinancesIcon />
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection