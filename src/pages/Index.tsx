import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion, useScroll } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="min-h-screen bg-navy text-slate relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </motion.div>
  );
};

export default Index;






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects';
// import Achievements from '../components/Achievements';
// import Experience from '../components/Experience';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import { useToast } from '@/components/ui/use-toast';
// import { motion, useScroll } from 'framer-motion';

// const Index = () => {
//   const { toast } = useToast();
//   const { scrollYProgress } = useScroll();

//   // useEffect(() => {
//   //   // Welcome toast
//   //   setTimeout(() => {
//   //     toast({
//   //       title: "Welcome to my portfolio!",
//   //       description: "Feel free to explore and get in touch if you have any questions.",
//   //     });
//   //   }, 1500);
//   // }, [toast]);

//   return (
//     <motion.div 
//       className="min-h-screen bg-navy text-slate relative"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Scroll progress indicator */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-teal z-50 origin-left"
//         style={{ scaleX: scrollYProgress }}
//       />
      
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Projects />
//       <Skills />
//       <Achievements />
//       <Contact />
//       <Footer />
//     </motion.div>
//   );
// };

// export default Index;
