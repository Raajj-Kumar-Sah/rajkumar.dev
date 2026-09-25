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

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="mb-32"
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.6 }}
    >
      <div className="md:grid md:grid-cols-12 items-center gap-6">

        {/* Project Image */}
        <div
          className={`md:col-span-7 ${
            reverse
              ? 'md:col-start-6 md:row-start-1'
              : 'md:col-start-1 md:row-start-1'
          }`}
        >
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-navy-dark/70 group-hover:bg-navy-dark/30 transition-all duration-300 z-10" />

                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
          ) : (
            <div className="block w-full overflow-hidden rounded-lg shadow-lg group">
              <div className="relative">
                <div className="absolute inset-0 bg-navy-dark/70 group-hover:bg-navy-dark/30 transition-all duration-300 z-10" />

                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div
          className={`md:col-span-6 ${
            reverse
              ? 'md:col-start-1 md:row-start-1'
              : 'md:col-start-7 md:row-start-1'
          } mt-6 md:mt-0 z-10`}
        >
          <div className="bg-navy-light p-5 rounded-lg shadow-lg">

            {/* Timeline */}
            <div className="flex justify-end mb-2">
              <p className="text-slate-light text-sm font-mono">
                {timeline}
              </p>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  {title}
                </a>
              ) : (
                <span>{title}</span>
              )}
            </h3>

            {/* Description */}
            <div className="mb-4">
              <p className="text-slate">
                {description}
              </p>
            </div>

            {/* Details */}
            <ul className="space-y-2 mb-4">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <span className="text-teal mr-2">
                    ▹
                  </span>

                  <span className="text-slate text-sm">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <ul className="flex flex-wrap gap-2 mb-6 text-sm text-slate-light">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4">

              {/* GitHub */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`${title} GitHub repository`}
                >
                  <Github size={20} />
                </a>
              )}

              {/* Live Demo */}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`${title} live demo`}
                >
                  <ExternalLink size={20} />
                </a>
              )}

            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};


// ======================================================
// PROJECTS SECTION
// ======================================================

const Projects: React.FC = () => {

  const sectionRef = useRef(null);

  const projects: ProjectProps[] = [

    // ==================================================
    // BILLING SOFTWARE
    // ==================================================

    {
      title: "Billing Software",

      description:
        "Full-Stack Billing Management System",

      details: [
        "Developed a billing management system using Java and Spring Boot with RESTful APIs for categories, items, orders, users, and dashboard analytics.",

        "Implemented JWT authentication and role-based authorization using Spring Security for secure Admin and User operations.",

        "Implemented automated subtotal, tax, and grand-total calculation along with order history and daily, weekly, and monthly sales analytics.",

        "Integrated Cloudinary for image management and containerized the Spring Boot backend and MySQL database using Docker and Docker Compose."
      ],

      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "JPA/Hibernate",
        "MySQL",
        "REST API",
        "Docker",
        "Docker Compose",
        "Cloudinary"
      ],

      githubUrl:
        "https://github.com/Raajj-Kumar-Sah/spring-boot-billing-software",

      demoUrl:
        "",

      imageUrl:
        "/upload/billing-software.png",

      timeline:
        "September 2026 - Present",

      reverse: false
    },


    // ==================================================
    // EMPLOYEE MANAGEMENT SYSTEM
    // ==================================================

    {
      title: "Employee Management System",

      description:
        "Java Spring Boot + React Employee Management System",

      details: [
        "Developed an Employee Management System using Spring Boot and React with RESTful APIs for efficient employee data management.",

        "Implemented complete CRUD operations for creating, retrieving, updating, and deleting employee records.",

        "Designed a layered backend architecture using Controller, Service, and Repository layers with Spring Data JPA and Hibernate.",

        "Integrated MySQL for persistent employee data management and connected the React frontend with Spring Boot REST APIs."
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "REST API",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "Maven"
      ],

      githubUrl:
        "https://github.com/Raajj-Kumar-Sah/Spring-Boot-React-Employee-Management-System",

      demoUrl:
        "",

      imageUrl:
        "/upload/employee-management.png",

      timeline:
        "2026",

      reverse: true
    },


    // ==================================================
    // FREESIKSHA
    // ==================================================

    {
      title: "FreeSiksha",

      description:
        "AI-Powered Full-Stack Learning Management System",

      details: [
        "Developed a full-stack Learning Management System using React, Node.js, Express.js, and MongoDB for students, trainers, volunteers, and administrators.",

        "Implemented course management, student enrollment, lecture progress tracking, reviews, certificates, blogs, and role-based access control.",

        "Built RESTful backend APIs with Node.js and Express.js and integrated Google Gemini AI for natural-language course search.",

        "Implemented Cloudinary media management, Firebase authentication, admin analytics, and Docker-based full-stack deployment."
      ],

      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Google Gemini AI",
        "Cloudinary",
        "Firebase",
        "Docker"
      ],

      githubUrl:
        "https://github.com/Raajj-Kumar-Sah/FreeSiksha-V02",

      demoUrl:
        "https://freesiksha-v02-frontend.onrender.com/",

      imageUrl:
        "/upload/freesiksha.png",

      timeline:
        "2025 - 2026",

      reverse: false
    }

  ];


  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="projects"
      className="section py-16"
      ref={sectionRef}
    >

      <div className="container mx-auto px-4">

        <SectionHeading title="Projects" />

        <div className="mt-16 space-y-16">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

        {/* GitHub Section */}
        <div className="text-center mt-16">

          <p className="text-slate mb-6">
            Interested in more of my projects?
          </p>

          <a
            href="https://github.com/Raajj-Kumar-Sah?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10"
            >
              View GitHub
            </Button>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;