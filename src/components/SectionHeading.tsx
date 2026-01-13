
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className }) => {
  return (
    <div className={cn("flex items-center mb-8", className)}>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="h-px bg-slate-dark flex-grow ml-4"></div>
    </div>
  );
};

export default SectionHeading;
