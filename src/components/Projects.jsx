import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='max-w-full flex justify-center items-center h-[250px] mt-10'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
            >
              <img
                src={github}
                alt='source code'
                className='object-contain w-1/2 h-1/2'
              />
            </div>
          </div>
        </div>

        <div>
        <div className="mt-8">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-4 text-secondary text-[20px]'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-6'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[15px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </Tilt>
  );
};

const Projects = () => {
  return (
    <>
        <p className={`${styles.sectionSubText} `}>From Inspiration to Realization</p>
        <h2 className={`${styles.sectionHeadText}`}>My Projects.</h2>

      <div className='w-full flex mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]'>
          The following projects showcase my skills and experience through
          real-world examples of my work.
      </div>

      <div className='flex flex-wrap justify-center mt-20 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
