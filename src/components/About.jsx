import { motion } from "framer-motion";

const skillList = [
  "JavaScript",
  "React",
  "Firebase",
  "Tailwindcss",
  "C++",
  "Python",
];

const variants = {
  fadeRightStart: { x: "-100%", opacity: 0 },
  fadeRightFinish: {
    x: 0,
    opacity: 1,
  },
};

export default function About() {
  return (
    <div
      className='min-h-screen bg-white flex flex-col justify-center relative'
      id='about'
    >
      <motion.div
        className='text-5xl font-bold opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"<about>"}
      </motion.div>
      <div className='overflow-hidden flex flex-col sm:flex-row p-6'>
        <div className='font-OpenSans font-light text-xl sm:text-2xl text-black mr-0 sm:mr-8 flex-1'>
          <motion.div
            className='mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi! My name is Nguyen Long Vu and I am a third year student at Ho
            Chi Minh University Of Science. I am interesting in building
            interactive web applications. With a soft, technical skill-set and
            attention to detail, I want to work as a Front-end Web Developer who
            cares deeply about user experience . Serious passion for UI/UX and
            new technologies.
          </motion.div>
          <motion.div
            className='mb-1'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Here are a few technologies I have been working with recently:
          </motion.div>
          <ul className='h-28 ml-4 xl:w-1/2 flex flex-wrap'>
            {skillList.map((skill, i) => (
              <motion.li
                className='list-["▹"] font-normal w-1/2'
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className='w-72 h-72 mx-auto my-4'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
          }}
        >
          <img
            className='block w-full h-full object-cover rounded-3xl shadow-md'
            src='/static/avatar.jpg'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='text-5xl font-bold opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"</about>"}
      </motion.div>
    </div>
  );
}
