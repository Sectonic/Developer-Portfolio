import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
    const [currentY, setCurrentY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setCurrentY(window.scrollY);
        };
      
        window.addEventListener('scroll', handleScroll);
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <motion.div
            initial={{ top: -100 }}
            animate={currentY < (window.innerHeight * .8) ? { top: 0 } : { top: -100 }}
            transition={{ delay: .2 }}
            className="fixed top-0 left-0 w-full py-4 flex justify-between items-center px-4 z-50"
        >
            <img src="/logo.png" className="w-14 h-14"/>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition cursor-pointer bg-white hover:bg-blue-500 hover:text-white text-slate-950 font-medium py-2 px-7 rounded-full max-w-max">Resume</Link>
        </motion.div>
    )
}

export default Nav;