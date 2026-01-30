import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const educationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" ref={ref} className="section">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            {/* ABOUT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate mb-4">
                Hello! I'm Raj Kumar Sah, a Pre-final-year B.Tech student in Computer Science at{" "}
                <span className="highlight">Dr A.P.J Abdul Kalam Technical University</span>, driven by a deep passion for building{" "}
                <span className="highlight">impactful and user-focused digital experiences</span>. I thrive at the intersection of{" "}
                <span className="highlight">full-stack web development</span> and{" "}
                <span className="highlight">competitive programming</span>.
              </p>
              
              <p className="text-slate mb-4">
                I love crafting <span className="highlight">seamless, responsive interfaces</span> and efficient backend systems—turning ideas into{" "}
                <span className="highlight">scalable applications</span>. Beyond code, I enjoy collaborating on projects that challenge norms and push boundaries.
              </p>
              
              <p className="text-slate mb-4">
                With a strong foundation in <span className="highlight">algorithms</span>, system design, and modern development frameworks, I'm always eager to learn and grow.
              </p>
              
              <p className="text-slate">
                Let's connect and build something <span className="highlight">awesome</span> together!
              </p>
            </motion.div>
            
            {/* EDUCATION */}
            <motion.div 
              className="mt-10 space-y-5"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {/* B.Tech */}
              <motion.div custom={1} variants={educationVariants}>
                <Card className="bg-navy-light border-teal/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-teal/10 rounded-md text-teal">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          B.Tech, CSE – AKTU Lucknow
                        </h3>
                        <p className="text-slate-light text-sm">
                          Aug 2023 – Aug 2027
                        </p>
                        <p className="text-teal mt-1">CGPA: 8.14</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 12th */}
              <motion.div custom={2} variants={educationVariants}>
                <Card className="bg-navy-light border-teal/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-teal/10 rounded-md text-teal">
                        <School size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Higher Secondary – H.D. Jain College, Arrah, Bihar
                        </h3>
                        <p className="text-slate-light text-sm">
                          BSEB
                        </p>
                        <p className="text-teal mt-1">72.2%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 10th */}
              <motion.div custom={3} variants={educationVariants}>
                <Card className="bg-navy-light border-teal/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-teal/10 rounded-md text-teal">
                        <School size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Secondary School (10th) –  D.K Carmel Res. School, Arrah, Bihar
                        </h3>
                        <p className="text-slate-light text-sm">
                          CBSE
                        </p>
                        <p className="text-teal mt-1">
                          Percentage: 93.6%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <motion.div 
              className="rounded-md overflow-hidden relative group"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-teal/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              <img 
                // src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                src="/upload/about3.png"
                alt="Raj Kumar Sah" 
                className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 border-2 border-teal rounded-md translate-x-4 translate-y-4 -z-10"
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={isInView ? { opacity: 1, x: 16, y: 16 } : { opacity: 0, x: 30, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
