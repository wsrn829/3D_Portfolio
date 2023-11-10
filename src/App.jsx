import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Projects, Experience, Feedbacks, Hero, Navbar, Skills, StarsCanvas } from './components';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          {/* <StarsCanvas /> */}
        </div>
        <Skills />
        <Projects />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  </>
  );
};

export default App;
