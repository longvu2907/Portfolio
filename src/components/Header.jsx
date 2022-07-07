import Logo from "./Logo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export default function Header() {
  const navBarRef = useRef(null);
  useEffect(() => {
    var lastScrollTop = 0;
    const handleOnScroll = () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        navBarRef.current.style.top = "-140.8px";
      } else {
        navBarRef.current.style.top = "0px";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    document.addEventListener("scroll", handleOnScroll);
    return () => {
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div
      className='w-full fixed top-0 bg-white z-10 shadow-md transition-[top] duration-500'
      ref={navBarRef}
    >
      <div className='p-4 sm:px-12 flex items-center justify-between'>
        <Logo
          className='w-16 h-16 cursor-pointer'
          whileHover='hover'
          whileTap='tap'
          variants={variants}
          onClick={() => (window.location.href = "/")}
        />
        <Link to='/static/CV.pdf' target='_blank' rel='noopener noreferrer'>
          <motion.button
            className='border-2 rounded-md border-black p-2 text-black'
            whileHover='hover'
            whileTap='tap'
            variants={variants}
          >
            Resume
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
