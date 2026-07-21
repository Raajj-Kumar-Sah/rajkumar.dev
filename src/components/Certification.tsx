import { motion } from "framer-motion";
import { Award, CalendarDays, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  image: string;
  credentialUrl: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    issued: "2025",
    image: "/certifications/oracle-ai.png",
    credentialUrl: "#",
    skills: ["OCI", "Artificial Intelligence", "Machine Learning"],
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    issued: "2025",
    image: "/certifications/cisco.png",
    credentialUrl: "#",
    skills: ["Networking", "TCP/IP", "Routing"],
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    issued: "2025",
    image: "/certifications/aws.png",
    credentialUrl: "#",
    skills: ["AWS", "Cloud", "EC2"],
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Tata (Forage)",
    issued: "2025",
    image: "/certifications/tata.png",
    credentialUrl: "#",
    skills: ["IAM", "Cybersecurity", "Risk"],
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    issued: "2025",
    image: "/certifications/google-ai.png",
    credentialUrl: "#",
    skills: ["Prompt Engineering", "GenAI"],
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    issued: "2025",
    image: "/certifications/salesforce.png",
    credentialUrl: "#",
    skills: ["CRM", "Salesforce", "AI"],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section scroll-mt-24 bg-[#020C1B]"
    >
      <div className="container mx-auto px-4">

        <SectionHeading title="Certifications" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{certifications.map((cert, index) => (
  <motion.div
    key={cert.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      delay: index * 0.08,
      ease: "easeOut",
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="group flex h-full flex-col overflow-hidden rounded-xl
               border border-[#233554]
               bg-[#112240]
               shadow-lg
               transition-all duration-300
               hover:border-[#64FFDA]
               hover:shadow-[0_15px_40px_rgba(100,255,218,.15)]"
  >
    <div className="relative h-52 overflow-hidden bg-[#0A192F]">
      <img
        src={cert.image}
        alt={cert.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col p-6">      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-[#233554] bg-[#0A192F] p-2">
          <Award size={22} className="text-[#64FFDA]" />
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-snug text-white">
            {cert.title}
          </h3>

          <p className="mt-1 text-[#64FFDA]">
            {cert.issuer}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={15} />
            {cert.issued}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#233554]
                       bg-[#0A192F]
                       px-3 py-1
                       text-xs text-slate-300
                       transition
                       hover:border-[#64FFDA]
                       hover:text-[#64FFDA]"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 pt-6
                   font-medium text-[#64FFDA]
                   transition-all hover:gap-3"
      >
        View Credential
        <ExternalLink size={17} />
      </a>
    </div>
  </motion.div>
))}        </div>
      </div>
    </section>
  );
}