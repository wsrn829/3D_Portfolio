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
      <p className={`${styles.sectionSubText} mt-3`}>From Philosophy to Technology</p>
      <h2 className={`${styles.sectionHeadText}`}>My Journey.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 0.8)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
    My passion for software engineering began at Oxford, where one of my PhD mentors had spent decades working on Digital Cultural Heritage. This led to my shift in interests from Social Science to Computer Science, and I was fascinated by the role software engineering played in traditionally non-technical fields like humanities, museums, and libraries.
    <br />
    <br />
    As a dedicated Full-Stack Engineer with over 1000 hours of hands-on training in Agile environments, 
    I bring expertise spanning the entire software development lifecycle. 
    Proficient in CI/CD processes, I specialize in ensuring smooth software deployments. Thriving in cross-functional teams, 
    I foster collaborative problem-solving to guarantee the timely delivery of high-quality software solutions. 
    Leveraging my background in social science research, I instill a user-centric approach, emphasizing the broader impact of development decisions. 
    <br />
    <br />
    I am proficient in building responsive user interfaces with modern JavaScript frameworks like React and secure server-side architectures with Python and Django. 
    My expertise encompasses working with both SQL and NoSQL databases and implementing CI/CD for projects. 
    As a growth-minded developer, I am driven by an insatiable desire for knowledge and an unwavering commitment to excellence. Let's work together to bring your ideas to life!
    </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
