
import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "HTML5", "CSS"]
    },
    {
      title: "Technologies",
      skills: ["Bootstrap", "ReactJS", "NodeJS", "ExpressJS", "REST API", "MongoDB", "MySQL", "NextJS", "Salesforce(CRM)", "Git", "Github"]
    },
    {
      title: "Tools",
      skills: ["Adobe Photoshop", "Postman", "Figma", "Canva", "draw.io", "Windows", "Unix/Linux"]
    },
    {
      title: "Skills & Interests",
      skills: ["Data Structures", "Algorithms", "API Integration", "Full-Stack Web Development", "Web Development", "Competitive Programming", "Open Source Contributions"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux", "Ubuntu"]
    },
    {
      title: "Coursework",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Development",
        "Machine Learning",
        "Artificial Intelligence",
        "Cloud Computing",
        "Engineering Mathematics"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(100, 255, 218, 0.15)",
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="section bg-navy-dark py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-navy-light p-6 rounded-lg shadow-md transform-gpu"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal">{category.title}</h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.2 + (index * 0.1)
                    }
                  }
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className="px-3 py-1 rounded-full bg-navy text-slate-light text-sm border border-slate-dark"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
