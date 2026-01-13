
import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, Code, Trophy } from 'lucide-react';

interface AchievementItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-4 rounded-lg hover:bg-navy-light transition-colors duration-300">
      <div className="mr-4 text-teal mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-foreground mb-1">{title}</h3>
        <p className="text-slate">{description}</p>
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Winner of the Smart India Hackathon 2024, selected as a finalist from 100+ teams. Worked in a team to develop a software solution, contributing to development, task planning, and integration.",
      icon: <Trophy size={24} />
    },
    {
      title: "OSCI 2025 Contributor",
      description: "Contributed to the Open Source Connect India (OSCI) 2025 by successfully completing 5 tasks and earning the OSCI Contributor Badge.",
      icon: <Code size={24} />
    },
    {
      title: "Problem Solving",
      description: "Solved over 500+ DSA questions on platforms including LeetCode (Highest Rating: 1667)",
      icon: <Award size={24} />
    },
    {
      title: "Google Agentic AI Hackathon",
      description: "Actively participated in the Google Agentic AI Hackathon, exploring agent-based AI solutions and receiving official certification.",
      icon: <Trophy size={24} />
    },
    {
      title: "Event Coordinator at IEEE Student Branch",
      description: "Successfully coordinated events and activities for the IEEE Student Branch, ensuring smooth execution and high participation.",
      icon: <Trophy size={24} />
    },
    {
      title: "Galgotias International Hackathon 2025",
      description: "Qualified for the Implementation Phase of the Prototype,in Galgotias International Hackathon 2025, selected among 3000 participants and placed in the top 1200 teams.",
      icon: <Trophy size={24} />
    }
  ];

  return (
    <section id="achievements" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Achievements" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
