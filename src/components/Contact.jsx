import { useState } from "react";
import emailjs, { init } from "emailjs-com";
import { motion } from "framer-motion";

const variants = {
  fadeRightStart: { x: "-100%", opacity: 0 },
  fadeRightFinish: {
    x: 0,
    opacity: 1,
  },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      init("QLpQ5M1iDcT1HeNdm");
      const serviceId = "service_q0x32ac";
      const templateId = "template_f5n42kj";
      const userId = "QLpQ5M1iDcT1HeNdm";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center' id='contact'>
      <motion.div
        className='text-5xl font-bold opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"<contact>"}
      </motion.div>
      <div className='flex flex-col items-center p-8 gap-4'>
        <input
          className='w-full border-2 p-2'
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className='w-full border-2 p-2'
          type='email'
          placeholder='Your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          className='w-full border-2 p-2 h-40'
          placeholder='Your message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <motion.button
          className='border-2 rounded-md border-black p-2 text-black w-1/2 md:w-1/3'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={submit}
        >
          Send Message
        </motion.button>
        <span className={emailSent ? "visible" : "invisible"}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </div>
      <motion.div
        className='text-5xl font-bold opacity-50'
        initial='fadeRightStart'
        whileInView='fadeRightFinish'
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        {"</contact>"}
      </motion.div>
    </div>
  );
}
