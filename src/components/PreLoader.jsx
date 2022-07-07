import { motion } from "framer-motion";
import Logo from "./Logo";

export default function PreLoader({ setIsLoading }) {
  return (
    <div className='w-full h-screen absolute flex overflow-hidden z-20'>
      <motion.div
        className='w-1/2 h-full bg-white z-10'
        exit={{ x: "-100%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className='w-[1px] h-1/3 bg-black absolute z-30'
        initial={{ top: "50%", left: "50%", y: "-50%", opacity: 0 }}
        exit={{
          height: "100%",
          width: 2,
          opacity: [1, 0],
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className='w-1/2 h-full bg-white z-10'
        exit={{ x: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 2.75, duration: 0.75 } }}
        onAnimationComplete={() => setIsLoading(false)}
      >
        <Logo />
      </motion.div>
    </div>
  );
}
