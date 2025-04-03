
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex items-start gap-4">
      <Icon className="w-6 h-6 text-loveable-gold shrink-0 mt-1" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
