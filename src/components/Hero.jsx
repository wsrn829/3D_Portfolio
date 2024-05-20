import { motion } from 'framer-motion';
import { styles } from '../styles'
import { SectionWrapper } from '../hoc';
import { me2 } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[600px] mx-auto p-20`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[75px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white` }>
          Hi, I'm<span className='text-[#915EFF]'> Sarina</span>
          </h1>
          <p className={`${styles.heroSubText} mt-8 text-white-100`}>
            Oxford PhD to <span className='text-[#915EFF]'>Full-Stack Engineer</span>
          </p>
          <p className="font-arial text-[25px] mt-8 text-white-100">
            "Cutting-Edge is my <span className="text-[#915EFF]">Comfort Zone"</span>
          </p>
          <div className='relative w-[250px] h-[415px]'>
            <div className="lg:flex lg:flex-1">
                <a
                  href="https://www.linkedin.com/in/wsrn829/"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={me2}
                    alt='me2'
                    className="mt-10 w-[200px] h-[185px] object-cover rounded-3xl shadow-md"
                  />
                </a>
          </div>
          <div className="mt-9 flex w-[270px] gap-3" >
                <div className='flex items-center justify-center w-full xs:bottom-40 bottom-32'>
                  <a href='#projects'>
                <div className='w-[125px] h-[55px] rounded-3xl border-3 border-secondary flex justify-center items-start p-4'
                  style={{ backgroundColor: '#7848CC', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s, color 0.3s' }}>
                  <p>My Projects</p>
                </div>
                </a>
                </div>
                <div className='flex items-center justify-center w-full xs:bottom-20 bottom-32'>
                <a href='#contact'>
                <div className='w-[125px] h-[55px] rounded-3xl border-3 border-secondary flex justify-center items-start p-4'
                style={{ backgroundColor: '#915EFF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s, color 0.3s' }}>
                <p>Contact Me</p>
                </div>
              </a>
            </div>
            </div>
         </div>
      </div>
    </div>
  </section>
  );
};

export default SectionWrapper(Hero, "hero");
