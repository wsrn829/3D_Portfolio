import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
    <motion.div varients={textVariant()}>
      <p className={`${styles.sectionSubText}`}>From Philosophy to Technology</p>
      <h2 className={`${styles.sectionHeadText}`}>My Journey.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 0.8)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
    “The limits of your language are the limits of your world,”
    a profound statement by the Austrian philosopher Ludwig Wittgenstein,
    has a special place in my heart. This is a sentence I first encountered in the preface
    of the very first dictionary my dad bought for me when I was just a child. This simple
    yet powerful message has stayed with me throughout my life, reminding me of the endless
    possibilities that language and knowledge can unlock.
    <br />
    <br />
    My passion for software engineering began at Oxford, where one of my PhD mentors had spent decades
    working on Digital Cultural Heritage. As a result of this experience, I defended my PhD dissertation
    in the Department of Computer Science at Oxford, subtly foreshadowing my future career shift.
    <br />
    <br />
    As a dedicated Full-Stack Engineer with over 1000 hours of training
    in an Agile environment, I have built a solid foundation in both frontend and backend technologies,
    from creating user interfaces using JavaScript frameworks like React and Redux, to architecting server-side solutions with Python, Django,
    REST API, and FastAPI. Proficiency in PostgreSQL and MongoDB ensures seamless data management
    and retrieval. I'm also a quick learner and collaborate closely with clients to create effcient, scalable, and user-friendly solutions
    that solve real-workd problems. Let's work together to bring your ideas to life!
    </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
