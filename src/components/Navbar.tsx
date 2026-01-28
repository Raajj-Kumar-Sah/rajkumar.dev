import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-teal font-semibold text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            RK
          </motion.button>

          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${
                    activeSection === item.id ? 'text-teal' : ''
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-teal"
                      layoutId="activeSection"
                      style={{ width: '100%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <motion.button
              onClick={() => setResumeOpen(true)}
              className="ml-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Button
                variant="outline"
                className="border-teal text-teal hover:bg-teal/10"
              >
                Resume
              </Button>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-slate focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-navy-light px-4 py-5 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-slate hover:text-teal transition-colors px-2 py-1 ${
                      activeSection === item.id ? 'text-teal' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.button
                  onClick={() => {
                    setResumeOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="btn inline-block text-center mt-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navItems.length * 0.05,
                  }}
                >
                  Resume
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
};

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       // Track active section
//       const sections = document.querySelectorAll('section[id]');
//       const scrollPosition = window.scrollY + 100;
      
//       sections.forEach(section => {
//         const sectionTop = (section as HTMLElement).offsetTop;
//         const sectionHeight = (section as HTMLElement).offsetHeight;
//         const sectionId = section.getAttribute('id') || '';
        
//         if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveSection(sectionId);
//         }
//       });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'About', href: '#about' },
//     { label: 'Experience', href: '#experience' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Achievements', href: '#achievements' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-md py-3' : 'bg-transparent py-5'}`}>
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <motion.a 
//           href="#" 
//           className="text-teal font-semibold text-2xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           RK
//         </motion.a>
        
//         <div className="hidden md:flex items-center space-x-1">
//           <nav className="flex items-center">
//             {navItems.map((item, index) => (
//               <motion.a 
//                 key={item.href}
//                 href={item.href} 
//                 className={`nav-link ${activeSection === item.href.substring(1) ? 'text-teal' : ''}`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 {item.label}
//                 {activeSection === item.href.substring(1) && (
//                   <motion.span 
//                     className="absolute bottom-0 left-0 h-0.5 bg-teal"
//                     layoutId="activeSection"
//                     style={{ width: '100%' }}
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </motion.a>
//             ))}
//           </nav>
//           <motion.a 
//             href="/public/RAJ.pdf" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="ml-5"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
//           >
//             <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">Resume</Button>
//           </motion.a>
//         </div>
        
//         {/* Mobile menu button */}
//         <motion.button 
//           className="md:hidden text-slate focus:outline-none"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           {mobileMenuOpen ? (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           )}
//         </motion.button>
//       </div>
      
//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             className="md:hidden bg-navy-light px-4 py-5 shadow-lg"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <nav className="flex flex-col space-y-4">
//               {navItems.map((item, index) => (
//                 <motion.a 
//                   key={item.href}
//                   href={item.href} 
//                   className={`text-slate hover:text-teal transition-colors px-2 py-1 ${activeSection === item.href.substring(1) ? 'text-teal' : ''}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="/RAJ.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn inline-block text-center mt-3"
//                 onClick={() => setMobileMenuOpen(false)}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//               >
//                 Resume
//               </motion.a>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
