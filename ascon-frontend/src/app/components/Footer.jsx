import React from 'react';
import { Junge } from 'next/font/google';

const junge = Junge({   
    weight: '400',
    subsets: ['latin'], 
})

const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center bg-[#311B20]/40">
                <h1 className={`${junge.className} text-[#333333] py-8 font-semibold text-sm`}>
                    © 2022-2023 All rights reserved |{" "}
                    <span className="hover:text-[#3A0210] font-semibold cursor-pointer">
                        Ascon Solutions{" "}
                    </span>
                </h1>
            </div>
        </>
    );
};

export default Footer;