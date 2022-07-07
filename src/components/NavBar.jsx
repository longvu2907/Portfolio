import { motion } from "framer-motion";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { NavItemsContext } from "../context/NavItemsProvider";

export default function NavBar() {
  const { navItems, setNavItems } = useContext(NavItemsContext);

  return (
    <motion.ul
      className='flex flex-row justify-center items-center rounded-lg bg-stone-800 fixed bottom-1 md:bottom-4 left-1/2 text-white px-4'
      initial={{ y: "100%", x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1, transition: { duration: 1.5 } }}
    >
      {navItems.map((item, i) => (
        <li
          onClick={() => {
            setNavItems(prev => {
              prev.forEach(prevItem => (prevItem.active = false));
              item.active = true;
              return [...prev];
            });
          }}
          key={i}
        >
          <HashLink
            className='w-20 md:w-24 h-14 flex flex-col rounded-lg items-center justify-center cursor-pointer'
            to={item.hash}
          >
            <motion.div
              className='text-2xl z-20'
              animate={{ y: item.active ? "-125%" : "0" }}
            >
              {item.logo}
            </motion.div>
            <motion.span
              className='absolute bottom-1 text-white'
              animate={{ visibility: item.active ? "visible" : "hidden" }}
            >
              {item.name}
            </motion.span>
          </HashLink>
        </li>
      ))}
      <motion.div
        className='w-20 md:w-24 h-14 flex items-center justify-center absolute left-4 z-10'
        animate={{ x: `calc(100%*${navItems.findIndex(item => item.active)})` }}
      >
        <div className='w-2 h-2 absolute left-[5px] md:left-[13px] -top-1 bg-stone-800 rounded-tr-full border-t-4 border-r-4 border-white z-10'></div>
        <div className='w-16 h-16 bg-stone-800 rounded-full border-4 border-white -translate-y-1/2 z-20'></div>
        <div className='w-2 h-2 absolute right-[5px] md:right-[13px] -top-1 bg-stone-800 rounded-tl-full border-t-4 border-l-4 border-white z-10'></div>
      </motion.div>
    </motion.ul>
  );
}
