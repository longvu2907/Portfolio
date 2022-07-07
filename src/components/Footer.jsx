import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const itemsList = [
  { icon: <BsGithub />, link: "https://github.com/longvu2907" },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/vu-nguyen-26a5271bb/",
  },
  { icon: <BsFacebook />, link: "https://www.facebook.com/longvu2907/" },
  { icon: <AiOutlineMail />, link: "mailto:longvu2907@gmail.com" },
];

export default function Footer() {
  return (
    <div className='w-full h-40 flex flex-col items-center justify-start gap-2'>
      <ul className='flex gap-4 lg:invisible'>
        {itemsList.map((icon, i) => (
          <a key={i} href={icon.link} target='_blank' rel='noopener noreferrer'>
            <motion.li
              className='text-3xl cursor-pointer'
              whileHover={{ y: "-10%", opacity: 0.9, color: "#164e63" }}
            >
              {icon.icon}
            </motion.li>
          </a>
        ))}
      </ul>
      <span>@ 2022, Created by Vu Nguyen</span>
    </div>
  );
}
