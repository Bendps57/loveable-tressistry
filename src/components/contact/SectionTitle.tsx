
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-title">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
      <Separator className="w-24 h-1 bg-loveable-gold mx-auto mt-6" />
    </div>
  );
};

export default SectionTitle;
