import React, { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: ExperienceData[] = [
    {
      title: "AI Foundations Certification & Cloud AI Experience",
      company: "Oracle",
      duration: "September 2025 - September 2026",
      location: "Remote",
      responsibilities: [
        "Completed comprehensive training on AI fundamentals, machine learning concepts, and cloud-based AI services offered by Oracle.",
        "Gained hands-on experience with Oracle Cloud Infrastructure (OCI) AI services, including setting up and deploying AI models.",
        "Learned to integrate AI solutions into applications using Oracle's AI tools and APIs.",
        "Explored real-world use cases of AI in various industries through practical projects and assignments.",
        "Developed a solid understanding of ethical considerations and best practices in AI development and deployment."
        
      ]
    },
      {
      title: "Frontend Developer Intern",
      company: "Edunet Foundation",
      duration: "AUG 2025 - OCT 2025",
      location: "Virtual/Remote",
      responsibilities: [
        "Developed responsive and user-friendly frontend interfaces using modern web technologies, ensuring cross-browser compatibility.",
        "Collaborated with designers and backend developers to convert UI/UX designs into functional and reusable components.",
        "Optimized frontend performance and improved page load times through clean and efficient code practices.",
        "Implemented reusable components and followed best practices to enhance scalability and maintainability of the codebase.",
        "Participated in code reviews, debugging, and feature enhancements within a real-world development environment."
      ]
    },
    {
      title: "Open Source Contributor",
      company: "Open Source Connect India (OSCI) 2025",
      duration: "JUL 2025 - OCT 2025",
      location: "Remote",
      responsibilities: [
        "Contributed to 3+ web applications with 5 successfully merged pull requests, improving user authentication, navigation, and overall usability.",
        "Enhanced UI/UX by implementing accessible design practices, robust input validation, and user-centric features such as FAQs and contextual help buttons.",
        "Collaborated with mentors and fellow contributors through code reviews and issue discussions to deliver clean, maintainable, and scalable solutions.",
        "Focused on building intuitive, user-friendly experiences by translating feature requirements into well-structured frontend implementations."
      ]
    },
   {
  title: "Event Management Associate, Student Event Coordinator",
  company: "IEEE CSE Student Branch AIMT",
  duration: "January 2025 – Present",
  location: "Lucknow, Uttar Pradesh",
  responsibilities: [
    "Coordinated end-to-end event planning, on-site execution, and post-event evaluations to ensure smooth and successful events.",
    "Adapted content strategies to evolving social media algorithms, achieving a 15% increase in social media engagement.",
    "Designed and optimized Instagram content to enhance visibility and engagement for IEEE initiatives.",
    "Collaborated with student teams to manage logistics, promotions, and participant coordination."
  ]
}

  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Company Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-teal text-navy-dark'
                    : 'bg-navy-light text-slate hover:text-teal'
                }`}
              >
                {exp.company.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="relative bg-navy-light rounded-lg p-6 md:p-8 shadow-lg min-h-[400px]">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy hover:bg-teal/20 text-slate-light hover:text-teal transition-colors z-10"
              aria-label="Previous experience"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy hover:bg-teal/20 text-slate-light hover:text-teal transition-colors z-10"
              aria-label="Next experience"
            >
              <ChevronRight size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="px-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{experiences[activeIndex].title}</h3>
                    <h4 className="text-teal font-medium">{experiences[activeIndex].company}</h4>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-slate-light">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{experiences[activeIndex].duration}</span>
                  </div>
                </div>
                
                <p className="text-slate-light mb-4 text-sm">{experiences[activeIndex].location}</p>
                
                <ul className="space-y-3 mt-4">
                  {experiences[activeIndex].responsibilities.map((responsibility, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <span className="text-teal mr-3 mt-1 flex-shrink-0">▹</span>
                      <span className="text-slate">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-teal w-6' : 'bg-slate-light/30 hover:bg-slate-light/50'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
