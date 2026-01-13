
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/Raajj-Kumar-Sah" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/raj-kumar-sah-470323308/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:rajkumar68580@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/rajkumar68580" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
          
          <p className="text-slate-light text-sm">
         Designed &
            <span className="text-teal mx-1"> developed </span>
            by Raj Kumar Sah
          </p>
          
          <p className="text-slate-light text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
