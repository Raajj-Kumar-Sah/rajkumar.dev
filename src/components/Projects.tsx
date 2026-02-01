// ProjectCard.tsx
import React, { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  timeline: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  details,
  githubUrl,
  demoUrl,
  imageUrl,
  timeline,
  reverse = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="mb-32" 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`md:grid md:grid-cols-12 items-center gap-6`}>
        {/* Project Image */}
        <div className={`md:col-span-7 ${reverse ? 'md:col-start-6 md:row-start-1' : 'md:col-start-1 md:row-start-1'}`}>
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full overflow-hidden rounded-lg shadow-lg group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-navy-dark/70 group-hover:bg-navy-dark/30 transition-all duration-300 "></div>
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </a>
        </div>

        {/* Project Content */}
        <div className={`md:col-span-6 ${reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7 md:row-start-1'} mt-6 md:mt-0 z-10`}>
          <div className="bg-navy-light p-5 rounded-lg shadow-lg">
            <div className="flex justify-end mb-2">
              <p className="text-slate-light text-sm font-mono">{timeline}</p>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal transition-colors"
              >
                {title}
              </a>
            </h3>
            
            <div className="mb-4">
              <p className="text-slate">{description}</p>
            </div>
            
            <ul className="space-y-2 mb-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span className="text-slate text-sm">{detail}</span>
                </li>
              ))}
            </ul>
            
            <ul className="flex flex-wrap gap-2 mb-6 text-sm text-slate-light">
              {technologies.map((tech) => (
                <li key={tech} className="font-mono">{tech}</li>
              ))}
            </ul>
            
            <div className="flex gap-4">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`${title} GitHub repository`}
              >
                <Github size={20} />
              </a>
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`${title} live demo`}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Travelling Postman",
      description: "Smart India Hackathon 2024 Winning Solution",
      details: [
        "Built the seamless frontend using Next.js for India Post's dynamic mail transmission system.",
        "Designed to calculate safety indexes for 700+ cities and optimize routes using real-time data.",
        "Optimized Routing: A* algorithm enhanced with real-world factors like festivals, climate, and history, reducing delivery time by 30%.",
        "Real-Time Node Safety Assessment: Live safety checks using news, weather, and social media.",
        "Multi-Mode Transport Support: Route planning using rail, road, and air."
      ],
      technologies: ["Next.js", "TailwindCSS", "PostgreSQL", "A* Algorithm", "RESTful APIs"],
      githubUrl: "//https://github.com/Raajj-Kumar-Sah/Travelling-Postman",
      demoUrl: "https://travelling-postman-3hl4.vercel.app/landing%20page/index.html",
      imageUrl: "/lovable-uploads/59e0b4c6-0a92-4933-a691-6ccad505c874.png",
      timeline: "March 2024 - May 2024",
      reverse: false
    },
    {
      title: "FusionCart",
      description: "Web Application Connecting Online and In-Store Shopping",
      details: [
        "Engineered a full-stack e-commerce platform handling 800 products across 16 categories using React.js, Redux, Node.js, Express.js, MongoDB, optimizing UX and performance through efficient database queries and state management.",
        "Implemented features like product search, real-time product details, stock updates, and recommendation logic, used web scraping scripts to extract 800 images for an enhanced product catalog",
        "Integrated Machine Learning model for enhanced product recommendations and personalized user experience."
      ],
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "//https://github.com/Raajj-Kumar-Sah/cart",
      demoUrl: "https://fusion-cart-frontend.vercel.app/",
      imageUrl: "/uploads/1f4f5f6e-3f3b-4e2e-999b-8d6a5c4f6e2e7b8c.png",
      timeline: "September 2024 - November 2024",
      reverse: true
    },
    {
      title: "GetAWay",
      description: "Full-Stack Hotel Booking Web Application",
      details: [
        "Built a full-stack app using MongoDB, Express.js, React.js, Node.js, implementing JWT-based authentication and an admin panel to manage 50 users.",
        "Developed database driven features like hotel listings, managing collection of 10 hotels and a user feedback system to enhance engagement.",
        "Created a responsive UI ensuring 100% cross-device compatibility and seamless integration."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      githubUrl: "//https://github.com/Raajj-Kumar-Sah/getaway",
      demoUrl: "https://hotel-booking-site-frontend.vercel.app/",
      imageUrl: "/uploads/c8eea761-70a3-4062-8536-6b425f484e63.png",
      timeline: "April 2024 - June 2024",
      reverse: false
    }
  ];

  return (
    <section id="projects" className="section py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" />

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate mb-6">Interested in more of my projects?</p>
          <a
            href="https://github.com/Raajj-Kumar-Sahh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
              View GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
