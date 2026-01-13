import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* =======================
   3D SHAPE COMPONENT
======================= */
const AnimatedShape = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [introDone, setIntroDone] = useState(false);
  const rotationProgress = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // 🔄 Initial 360° rotation on load
    if (!introDone) {
      rotationProgress.current += delta * 2; // rotation speed
      meshRef.current.rotation.y = rotationProgress.current;
      meshRef.current.rotation.x = rotationProgress.current * 0.3;

      if (rotationProgress.current >= Math.PI * 2) {
        setIntroDone(true);
      }
    }
    // 🖱️ Mouse-based rotation after intro
    else {
      meshRef.current.rotation.y = mouse.x * 0.8;
      meshRef.current.rotation.x = mouse.y * 0.6;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#db09b8" wireframe />
    </mesh>
  );
};

/* =======================
   HERO SECTION
======================= */
const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="md:col-span-8 lg:col-span-7"
            style={{ opacity, y }}
          >
            <motion.p
              className="text-teal mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Raj Kumar Sah.
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Aspiring Software Engineer.
            </motion.h2>

            <motion.p
              className="text-slate text-lg md:text-xl max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a passionate <span className="highlight">web developer</span>{' '}
              and <span className="highlight">competitive programmer</span> with
              a keen interest in building exceptional digital experiences and
              solving complex problems.
            </motion.p>

            <motion.div
              className="flex space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://github.com/Raajj-Kumar-Sah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-kumar-sah-470323308/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rajkumar68580@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://leetcode.com/u/rajkumar68580"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LeetCode"
              >
                <Code size={24} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#contact" className="btn">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT 3D CANVAS */}
          <motion.div
            className="hidden md:block md:col-span-4 lg:col-span-5 h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ opacity }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
              <Suspense fallback={null}>
                <AnimatedShape mouse={mousePosition} />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
