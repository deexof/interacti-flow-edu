import React from 'react';
import { cn } from '@/lib/utils';

interface EvidenceTagProps {
  className?: string;
  children: React.ReactNode;
  number?: string;
}

const EvidenceTag: React.FC<EvidenceTagProps> = ({ 
  className, 
  children,
  number = "001"
}) => {
  return (
    <div className={cn("evidence-tag inline-block", className)}>
      <div className="text-xs mb-1 opacity-70">EVIDENCE #{number}</div>
      <div>{children}</div>
    </div>
  );
};

export default EvidenceTag;