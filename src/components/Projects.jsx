import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const variants = {
  fadeRightStart: { x: "-100%", opacity: 0 },
  fadeRightFinish: {
    x: 0,
    opacity: 1,
  },
};

const projects = [
  {
    name: "Chat App",
    desc: "A web app for chatting in realtime, built with ReactJS, Firebase and SCSS.",
    demo: "https://chat-app-2022.netlify.app",
    src: "https://github.com/longvu2907/Chat-App",
    techs: ["ReactJS", "Firebase", "SCSS"],
  },
  {
    name: "Personal Website",
    desc: "My portfolio website I designed and built with ReactJS, Tailwind CSS, Framer-motion.",
    demo: "https://chat-app-2022.netlify.app",
    src: "https://github.com/longvu2907/Chat-App",
    techs: ["ReactJS", "Tailwind CSS", "Framer-motion"],
  },
  {
    name: "Shopee Clone",
    desc: "A simple Shopee clone built with HTML, SCSS, Javascript and using API from rapidAPI.",
    demo: "https://shopee-clone-2021.netlify.app",
    src: "https://github.com/longvu2907/shopee-clone",
    techs: ["HTML", "SCSS", "JS", "API"],
  },
  {
    name: "Images API",
    desc: "User can get images, post images to google drive storage.",
    demo: null,
    src: "https://github.com/longvu2907/google-drive-api",
    techs: ["Python", "Django Rest Framework", "Google drive API"],
  },
  {
    name: "Calculator",
    desc: "A simple calculator.",
    demo: "https://calculator-aug-2021.netlify.app/",
    src: "https://github.com/longvu2907/Calculator",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    name: "Todo-list",
    desc: "A simple todo-list.",
    demo: "https://todo-list-aug-2021.netlify.app/",
    src: "https://github.com/longvu2907/todo-list",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    name: "Covid-19 Tracker",
    desc: "Final project of computer networking - Dec, 2021. Application use Python socket - client server model, UI built with kivy framework.",
    demo: null,
    src: "https://github.com/longvu2907/covid-19-app",
    techs: ["Python", "Kivy", "Socket"],
  },
  {
    name: "Course Registration System",
    desc: "Final project of programing techniques - Jul, 2021. A simple course registration system run in console.",
    demo: "https://www.youtube.com/watch?v=_morNfL3lSU",
    src: "https://github.com/longvu2907/CourseRegistrationSystem",
    techs: ["C++"],
  },
  {
    name: "Race bet",
    desc: "Final project of Introduction to Information Technology - Jan, 2021. A game built with Pygame.",
    demo: null,
    src: "https://github.com/longvu2907/Racer",
    techs: ["Python", "Pygame"],
  },
];

export default function Projects() {
  const [itemsToShow, setItemsToShow] = useState(3);

  return (
    <div className='min-h-screen flex flex-col justify-center' id='projects'>
      <motion.div
        className='text-5xl font-bold mb-4 opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"<projects>"}
      </motion.div>
      <ul className='flex flex-wrap justify-center gap-2 p-6'>
        <AnimatePresence initial={true}>
          {projects.slice(0, itemsToShow).map((project, i) => (
            <motion.li
              key={i}
              className='flex flex-col justify-between w-full md:w-[48%] lg:w-[32%] border-2 border-black pt-12 pb-4 px-4 overflow-hidden relative'
              whileHover={{ y: "-5%" }}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
            >
              <motion.div
                initial={{ y: "50%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className='font-bold text-2xl mb-1'>{project.name}</div>
                <div className='font-light text-xl mb-2'>{project.desc}</div>
              </motion.div>
              <ul className='flex gap-4 mt-2'>
                {project.techs.map((tech, i) => (
                  <li className='opacity-80' key={i}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className='text-4xl flex gap-2 absolute top-2 right-2'>
                {project.src && (
                  <a
                    href={project.src}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <AiOutlineLink />
                  </a>
                )}
              </div>
              <motion.div
                className='absolute top-0 left-0 bg-black'
                initial={{ width: "100%", height: "100%" }}
                whileInView={{ width: "0" }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
        <motion.button
          className='border-2 rounded-md border-black p-2 text-black'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setItemsToShow(prev =>
              prev === projects.length ? 3 : projects.length,
            )
          }
        >
          {itemsToShow === projects.length ? "Show less" : "Show more"}
        </motion.button>
      </ul>
      <motion.div
        className='text-5xl font-bold mt-4 opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"</projects>"}
      </motion.div>
    </div>
  );
}
