import { motion } from "framer-motion";

const variants = {
  fadeUp: { y: ["100%", "0%"], opacity: [0, 1], transition: { duration: 1.5 } },
  appear: { scale: [0, 1], opacity: [0, 1], transition: { duration: 1.5 } },
};

export default function Home() {
  return (
    <motion.div
      className='h-screen bg-white flex flex-col items-center justify-center'
      id='home'
    >
      <motion.div className='py-6 overflow-hidden'>
        <motion.div
          className='font-[splash] text-6xl sm:text-8xl text-black'
          whileInView={"fadeUp"}
          variants={variants}
        >
          Vu Nguyen
        </motion.div>
      </motion.div>
      <motion.div className='overflow-hidden'>
        <motion.div
          className='font-normal text-[1.4rem] sm:text-5xl text-black'
          whileInView={"fadeUp"}
          variants={variants}
        >
          Software Developer
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
