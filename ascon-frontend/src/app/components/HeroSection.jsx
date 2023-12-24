"use client";
import React from 'react'
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google'
import { DownArrow } from '../../../public/svgs';

const playfair = Playfair_Display({   

    subsets: ['latin'], 
})

const HeroSection = () => {
  return (
    <section className='lg:py-16 bg-center bg-cover bg-blend-overlay bg-fixed bg-cream/60' style={{ backgroundImage: `url('https://source.unsplash.com/random/')` }}>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-12 my-24  '>
            <div className={`${playfair.className} sm:col-span-5  text-center flex flex-col flex-1  items-center justify-center mb-12 sm:mb-0 mx-auto`}>
                <h1 className='text-[#6A0921] mb-4 text-xl sm:text-5xl lg:text-6xl lg:leading-normal'>
                    Ascon Solutions
                </h1>
                <p className="text-[#3A0210] text-base sm:text-lg lg:text-xl">
                        Logistics and Advisory LLC
                </p>

                <DownArrow
                    className="text-sm"
                    style={{
                        fill: "#25020B", // Set the hex color
                        opacity: 0.5,     // Set the opacity
                        width: "136px",   // Set the width
                        height: "38px",   // Set the height
                    }}
                />
            </div>
            <div className='sm:col-span-7 place-self-center mt-8 sm:mt-4 lg:mt-0 text-center'>
                <h1 className={`${playfair.className} text-black text-6xl sm:text-8xl lg:text-9xl lg:leading-normal`}>
                    Quote Here
                </h1>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection