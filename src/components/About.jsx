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
    My passion for software engineering began at Oxford, where one of my PhD mentors, 
    now affiliated with the Department of Engineering Science, had spent decades working on 
    Digital Cultural Heritage, which led to my shift in interests from Oriental Studies to 
    Computer Science. *Fun fact: I defended my D.Phil dissertation in the Department 
    of Computer Science building at Oxford, subtly foreshadowing my future career shift.*
    <br />
    <br />
    As a dedicated Full-Stack Engineer with over 1000 hours of training in Agile environments, 
    I bring hands-on experience spanning the entire software development lifecycle, from planning to implementation. 
    Proficient in CI/CD processes, I specialize in ensuring smooth software deployments. Thriving in cross-functional teams, 
    I foster collaborative problem-solving to guarantee the timely delivery of high-quality software solutions. 
    Leveraging my background in social science research, I instill a user-centric approach, emphasizing the broader impact of development decisions. 
    Let's work together to bring your ideas to life!
    </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
