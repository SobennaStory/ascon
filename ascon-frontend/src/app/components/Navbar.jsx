"use client";
import { Junge } from 'next/font/google'
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Divider, EducationIcon } from '../../../public/svgs';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "Who Are We",
        path: "#about",
    },
    {
        title: "Services",
        path: "#services",
    },
    {
        title: "Contact Us",
        path: "#contact",
    },
]
const junge = Junge({   
    weight: '400',
    subsets: ['latin'], 
})

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border-b-4 border-[#A6A285] top-0 left-0 right-0 z-20 bg-[#333333]/80'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            {/* This is a comment inside JSX 
           <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                <LogoImage
                    className= 'text-primary-300 text-4xl' 
                />
            </Link>
            */}
            <div className={`${junge.className} text-center text-m`}>
                <p className='text-white font-bold'>Ascon</p>
                <p className='text-white font-bold'>Solutions</p>
            </div>
           
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-4 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(false)} className='flex items-center px-4 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className="h-5 w-5"></XMarkIcon>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto px-3 ' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row'>
                        {navLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <li className={`border-r px-4 h-10 flex items-center text-cream ${index === navLinks.length - 1 ? 'border-transparent' : 'border-[#A6A285]'}`}>
                                    <NavLink href={link.path} title={link.title}></NavLink>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links = {navLinks}/> : null}
    </nav>
  )
}

export default Navbar