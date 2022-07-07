import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const itemsList = [
  { icon: <BsGithub />, link: "https://github.com/longvu2907" },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/vu-nguyen-26a5271bb/",
  },
  { icon: <BsFacebook />, link: "https://www.facebook.com/longvu2907/" },
];

export default function SideBar() {
  return (
    <div className='invisible lg:visible'>
      <ul className='h-2/5 flex flex-col mx-12 items-center justify-between fixed bottom-0 left-0'>
        {itemsList.map((icon, i) => (
          <a key={i} href={icon.link} target='_blank' rel='noopener noreferrer'>
            <motion.li
              className='text-3xl mb-6 cursor-pointer'
              whileHover={{ y: "-10%", opacity: 0.9, color: "#164e63" }}
            >
              {icon.icon}
            </motion.li>
          </a>
        ))}
        <div className='flex-1 w-[2px] bg-black'></div>
      </ul>
      <div className='h-2/5 flex flex-col mx-12 items-center justify-between fixed bottom-0 right-0'>
        <a href='mailto:longvu2907@gmail.com'>
          <motion.div
            className='mb-6 cursor-pointer'
            style={{ writingMode: "vertical-lr" }}
            whileHover={{ y: "-5%", opacity: 0.9, color: "#164e63" }}
          >
            Longvu2907@gmail.com
          </motion.div>
        </a>
        <div className='flex-1 w-[2px] bg-black'></div>
      </div>
    </div>
  );
}
