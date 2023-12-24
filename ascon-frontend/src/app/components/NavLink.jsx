
import Link from 'next/link';
import {Istok_Web} from 'next/font/google'

const istok = Istok_Web({   
    weight: '400',
    subsets: ['latin'], 
})


const NavLink = ({href, title}) => {
  return (
    <Link href={href} className={`block py-2 pl-3 pr-4 text-cream sm:text-sm rounded md:p-0 hover:text-[#B9A07B] ${istok.className}`}>
        {title}
    </Link>
  );
};

export default NavLink